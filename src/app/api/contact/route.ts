import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

function getClientIP(request: NextRequest): string {
  // Get IP from various headers in order of preference
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // First request or window expired
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count
  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  try {
    // Create contact submission object
    const submission = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      timestamp: new Date().toISOString(),
    };

    // 1. Log to console (for development)
    console.log('📧 NEW CONTACT FORM SUBMISSION:', submission);
    console.log('='.repeat(50));
    console.log(`Name: ${submission.name}`);
    console.log(`Email: ${submission.email}`);
    console.log(`Phone: ${submission.phone}`);
    console.log(`Message: ${submission.message}`);
    console.log(`Time: ${submission.timestamp}`);
    console.log('='.repeat(50));

    // 2. Save to local file (for persistent storage)
    try {
      const fs = require('fs').promises;
      const path = require('path');
      
      // Create submissions directory if it doesn't exist
      const submissionsDir = path.join(process.cwd(), 'submissions');
      await fs.mkdir(submissionsDir, { recursive: true });
      
      // Save submission to JSON file
      const filename = `contact-${Date.now()}.json`;
      const filepath = path.join(submissionsDir, filename);
      await fs.writeFile(filepath, JSON.stringify(submission, null, 2));
      
      console.log(`💾 Contact submission saved to: ${filename}`);
    } catch (fileError) {
      console.warn('Could not save to file:', fileError);
    }

    // Simulate successful email send
    // TODO: Integrate with actual email service like Resend
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const emailSent = await sendEmail(validatedData);

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send message. Please try again.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully!',
        success: true,
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Submissions - Admin',
  description: 'View all contact form submissions',
};

async function getSubmissions() {
  try {
    const fs = require('fs').promises;
    const path = require('path');
    
    const submissionsDir = path.join(process.cwd(), 'submissions');
    
    try {
      const files = await fs.readdir(submissionsDir);
      const submissions = [];
      
      for (const file of files) {
        if (file.endsWith('.json')) {
          const content = await fs.readFile(path.join(submissionsDir, file), 'utf-8');
          submissions.push(JSON.parse(content));
        }
      }
      
      // Sort by timestamp (newest first)
      return submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    } catch (dirError) {
      // Directory doesn't exist yet
      return [];
    }
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Contact Submissions
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            View all contact form submissions from your portfolio visitors.
          </p>
        </div>
        <Separator />

        {/* Submissions List */}
        <div className="mx-auto max-w-4xl">
          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <p className="mt-2 text-lg">No contact submissions yet.</p>
                <p className="text-sm">When someone fills out your contact form, it will appear here.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((submission, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{submission.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {submission.email} • {submission.phone}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(submission.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded p-4">
                    <p className="text-sm whitespace-pre-wrap">{submission.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

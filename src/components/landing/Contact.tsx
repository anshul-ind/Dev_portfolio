import { contactConfig } from '@/config/Contact';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';

export default function Contact() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Get in" heading="Contact" />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{contactConfig.title}</h3>
            <p className="text-muted-foreground mt-2">
              {contactConfig.description}
            </p>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span className="text-sm">anshulchouhan5176@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span className="text-sm">+91 6232642389</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-muted-foreground" />
                <span className="text-sm">Indore, India</span>
              </div>
            </div>
            
            <Button className="w-full mt-6">
              <a 
                href={`mailto:anshulchouhan5176@gmail.com?subject=Portfolio%20Contact`}
                className="flex items-center justify-center gap-2"
              >
                Send Message
              </a>
            </Button>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mt-2">
              I&apos;m always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development!
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="text-sm space-y-2">
                <p><strong>Available for:</strong></p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>Freelance projects</li>
                  <li>Full-time opportunities</li>
                  <li>Technical collaborations</li>
                  <li>Hackathon partnerships</li>
                </ul>
              </div>
              
              <div className="text-sm space-y-2">
                <p><strong>Response time:</strong></p>
                <p>Usually within 24 hours</p>
              </div>
              
              <div className="text-sm space-y-2">
                <p><strong>Preferred contact:</strong></p>
                <p>Email or LinkedIn messages</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  );
}

import { devices } from '@/config/Gears';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Card } from '../ui/card';

export default function Gears() {
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="My" heading="Gears" />
      <div className="mt-8 flex flex-col gap-4">
        {devices.map((item) => (
          <div key={item.name} className="group">
            <Card className="flex flex-row items-center justify-between gap-4 px-4 py-2">
              <div className="bg-muted flex items-center justify-center rounded-md p-2">
                {item.icon}
              </div>
              <div className="flex w-full flex-col">
                <h3 className="text-base font-semibold">{item.name}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

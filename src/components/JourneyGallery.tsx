'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useState } from 'react';

export interface JourneyImage {
  file: string;
  title: string;
  description?: string;
  date?: string;
}

interface JourneyGalleryProps {
  images: JourneyImage[];
  title: string;
  className?: string;
}

export default function JourneyGallery({
  images,
  title,
  className,
}: JourneyGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">
          No images found for {title.toLowerCase()}!
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">
          Memories and achievements from {title.toLowerCase()}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <Card
            key={image.file}
            className="group h-full w-full cursor-pointer overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800"
            onClick={() => setActive(image.file)}
          >
            <CardHeader className="p-0">
              <div className="group bg-muted/20 relative aspect-video overflow-hidden">
                <Image
                  src={image.file}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="px-6">
              <div className="space-y-2">
                <h3 className="group-hover:text-primary text-lg leading-tight font-semibold">
                  {image.title}
                </h3>
                {image.description && (
                  <p className="text-secondary text-sm line-clamp-2">
                    {image.description}
                  </p>
                )}
              </div>
            </CardContent>

            {image.date && (
              <CardFooter className="p-6 pt-0">
                <time className="text-secondary text-sm" dateTime={image.date}>
                  {new Date(image.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {/* Fullscreen viewer */}
      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="bg-background/95 max-h-[90vh] w-full max-w-[90vw] border-0 p-0 backdrop-blur-sm">
          {active && (
            <>
              <DialogTitle className="sr-only">
                {images.find((img) => img.file === active)?.title || 'Image'}
              </DialogTitle>
              <div className="flex h-60 items-center justify-center p-4 md:h-92">
                <div className="relative h-full w-full rounded-lg">
                  <Image
                    src={active}
                    alt={
                      images.find((img) => img.file === active)?.title || 'Image'
                    }
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
              {images.find((img) => img.file === active) && (
                <div className="border-t px-6 pt-2 pb-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      {images.find((img) => img.file === active)?.title || 'Image'}
                    </h3>
                    {images.find((img) => img.file === active)?.description && (
                      <p className="text-muted-foreground text-sm">
                        {images.find((img) => img.file === active)?.description}
                      </p>
                    )}
                    {images.find((img) => img.file === active)?.date && (
                      <time
                        className="text-muted-foreground text-xs"
                        dateTime={
                          images.find((img) => img.file === active)?.date
                        }
                      >
                        {new Date(
                          images.find((img) => img.file === active)?.date || '',
                        ).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

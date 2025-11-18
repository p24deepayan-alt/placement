import React from 'react';
import { cn } from "../lib/utils";
import { TestimonialCard, TestimonialAuthor } from "./ui/TestimonialCard";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

export function TestimonialsWithMarquee({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-gray-50 text-foreground",
        "py-16 sm:py-24",
        className
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 sm:gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-iima-blue">{title}</h2>
            <div className="mt-4 w-24 h-1 bg-iima-blue mx-auto" />
            <p className="text-md max-w-[600px] font-body text-gray-700 sm:text-lg leading-relaxed mt-4">
                {description}
            </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:90s]"
          >
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  // FIX: Replaced prop spreading with explicit props to resolve a TypeScript error where the 'key' prop was being incorrectly bundled with other props, causing a type mismatch with TestimonialCardProps.
                  <TestimonialCard
                    key={`${setIndex}-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                    href={testimonial.href}
                  />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-gray-50 sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-gray-50 sm:block" />
        </div>
      </div>
    </section>
  );
}

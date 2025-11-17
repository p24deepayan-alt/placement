
import React from 'react';
import { cn } from "../../lib/utils";
import { Avatar, AvatarImage } from "./Avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border",
        "bg-white",
        "p-4 text-start sm:p-6",
        "hover:shadow-lg",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-shadow duration-300",
        "h-full",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-bold font-display text-iima-blue leading-none">
            {author.name}
          </h3>
          <p className="text-sm text-gray-500 font-body">
            {author.handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-gray-700 font-body flex-grow">
        {text}
      </p>
    </Card>
  );
}
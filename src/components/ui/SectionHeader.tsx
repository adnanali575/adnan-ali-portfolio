'use client';

import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  highlight, 
  centered = true, 
  className, 
  ...props 
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16', centered && 'text-center', className)} {...props}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title.split(' ').map((word, index) => (
          <span key={index}>
            {word === highlight ? (
              <span className="text-blue-500">{word}</span>
            ) : (
              word
            )}
            {index < title.split(' ').length - 1 && ' '}
          </span>
        ))}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      {/* Animated underline */}
      <div className="mt-6 flex justify-center">
        <div className="relative">
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-sky-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-24 h-1 bg-linear-to-r from-blue-500 to-sky-500 rounded-full blur-sm opacity-50 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

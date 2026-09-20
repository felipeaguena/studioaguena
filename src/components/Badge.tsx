import React from 'react';

type BadgeVariant = 'blue-blur' | 'blue-solid';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = 'blue-blur',
  size = 'sm',
  className = '',
  children,
}: BadgeProps) {
  const baseClasses = 'inline-block font-semibold rounded-full uppercase tracking-widest';

  const variantClasses: Record<BadgeVariant, string> = {
    'blue-blur': 'bg-blue-100 dark:bg-blue-950/80 border border-blue-200/60 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 backdrop-blur-md',
    'blue-solid': 'bg-blue-100 dark:bg-blue-950/60 border border-transparent text-blue-700 dark:text-blue-400',
  };

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
}

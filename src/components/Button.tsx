import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'solid-blue' | 'outline-alt';
type ButtonSize = 'default' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'default',
  href,
  target,
  icon,
  iconPosition = 'left',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all transform duration-200 hover:-translate-y-0.5';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-md hover:shadow-lg',
    outline: 'bg-white dark:bg-slate-900 border-2 border-slate-200 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm',
    'solid-blue': 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-xl',
    'outline-alt': 'border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-800 dark:text-white shadow-sm',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    default: 'px-7 py-3.5',
    lg: 'px-8 py-4',
    xl: 'px-10 py-5',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 flex items-center">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2 flex items-center">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      // Omit type/onClick/etc button props for anchor
      const { type, ...anchorProps } = props as any;
      return (
        <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={combinedClasses} {...anchorProps}>
          {content}
        </a>
      );
    }
    const { type, ...anchorProps } = props as any;
    return (
      <Link href={href} target={target} className={combinedClasses} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

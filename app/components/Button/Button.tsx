'use client';

import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import type { UrlObject } from 'url';

export interface ButtonProps {
  /**
   * @default 'button'
   */
  type?: 'button' | 'submit';
  /**
   * @default 'contained'
   */
  variant?: 'contained' | 'outlined' | 'text';
  /**
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @default 'primary'
   */
  color?: 'primary' | 'dark' | 'light' | 'none';
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * @default false
   */
  full?: boolean;
  /**
   * @default 'sm'
   */
  rounded?: 'sm' | 'none' | 'full';
  /**
   * @default false
   */
  disabled?: boolean;
  href?: UrlObject | string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const variants = {
  contained:
    'inline-flex items-center w-full align-middle transition-colors border min-w-fit cursor-pointer md:w-auto',
  outlined:
    'inline-flex items-center w-full align-middle transition-colors border min-w-fit cursor-pointer bg-white text-dark md:w-auto',
  text: `inline-flex items-center w-full align-middle transition-colors border min-w-fit cursor-pointer text-dark md:w-auto`,
};

const sizes = {
  sm: 'px-16 pt-8 pb-7 text-sm',
  md: 'px-16 py-8',
  lg: 'px-24 py-12',
};

const colors = {
  primary: {
    contained:
      'bg-primary border-primary text-white hover:bg-primary-light hover:border-primary-light active:bg-primary-light active:border-primary-light',
    outlined:
      'border-primary text-primary hover:border-primary-light active:border-primary-light',
    text: 'text-primary',
  },
  dark: {
    contained:
      'bg-dark border-dark text-white hover:bg-dark-light hover:border-dark-light active:bg-dark-light active:border-dark-light',
    outlined: 'border-gray-800 hover:border-gray-600 active:border-gray-600',
    text: 'text-dark',
  },
  light: {
    contained:
      'bg-gray-200 border-gray-200 text-gray-800 hover:bg-gray-100 hover:border-gray-100 active:bg-gray-100 active:border-gray-100',
    outlined: 'border-gray-400 hover:border-gray-600 active:border-gray-600',
    text: 'text-gray-600',
  },
};

const aligns = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
};

const roundeds = {
  sm: 'rounded-sm',
  none: '',
  full: 'rounded-full',
};

function Button({
  type = 'button',
  variant = 'contained',
  align = 'center',
  color = 'primary',
  size = 'md',
  disabled = false,
  full = false,
  rounded = 'sm',
  href,
  className,
  children,
  onClick,
}: ButtonProps) {
  const variantClasses = variants[variant];
  const alignClasses = aligns[align];
  const sizeClasses = variant !== 'text' && sizes[size];
  const colorClasses = !disabled && color !== 'none' && colors[color][variant];
  const roundedClasses = roundeds[rounded];

  const commonClasses = clsx(
    variantClasses,
    alignClasses,
    sizeClasses,
    colorClasses,
    roundedClasses,
    {
      'md:w-full': full,
      'text-gray-500 cursor-default pointer-events-none': disabled,
      'bg-gray-300 border-gray-300': disabled && variant !== 'text',
    },
    className,
  );

  if (href) {
    return (
      <Link href={href} className={commonClasses} onClick={() => onClick?.()}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        disabled={disabled}
        className={commonClasses}
        onClick={() => onClick?.()}
      >
        {children}
      </button>
    );
  }
}

export default Button;

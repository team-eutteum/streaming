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
  variant?: 'contained' | 'outlined';
  /**
   * @default 'center'
   */
  align?: 'left' | 'center' | 'right';
  /**
   * @default 'primary'
   */
  color?: 'primary' | 'dark';
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
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
  contained: 'btn',
  outlined: 'btn',
};

const sizes = {
  sm: 'size-sm',
  md: 'size-md',
  lg: 'size-lg',
};

const colors = {
  primary: {
    contained: 'primary',
    outlined: 'primary outlined',
  },
  dark: {
    contained: 'dark',
    outlined: 'dark outlined',
  },
};

const aligns = {
  left: 'align-left',
  center: 'align-center',
  right: 'align-right',
};

const roundeds = {
  sm: 'rounded-sm',
  none: 'rounded-none',
  full: 'rounded-full',
};

function Button({
  type = 'button',
  variant = 'contained',
  align = 'center',
  color = 'primary',
  size = 'md',
  disabled = false,
  rounded = 'sm',
  href,
  className,
  children,
  onClick,
}: ButtonProps) {
  const variantClasses = variants[variant];
  const alignClasses = aligns[align];
  const sizeClasses = sizes[size];
  const colorClasses = colors[color][variant];
  const roundedClasses = roundeds[rounded];

  const commonClasses = clsx(
    variantClasses,
    alignClasses,
    sizeClasses,
    colorClasses,
    roundedClasses,
    {
      'disabled ': disabled,
    },
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={commonClasses}
        onClick={() => onClick?.()}
        target="_blank"
        rel="noreferrer"
      >
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

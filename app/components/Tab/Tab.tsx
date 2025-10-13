'use client';
import clsx from 'clsx';
import Link from 'next/link';

import type { UrlObject } from 'url';
interface TabProps {
  href?: string | UrlObject;
  currentPage?: string;
  children: React.ReactNode;
  className?: string;
  /**
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * @default 'outlined'
   */
  variant?: 'outlined' | 'box';
  selected: number | string;
  index: number;
  uniqueId: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const variants = {
  outlined: 'outlined',
  box: 'box',
};

function Tab({
  href,
  currentPage,
  children,
  className,
  size = 'md',
  variant = 'outlined',
  selected,
  index,
  uniqueId,
  onClick,
}: TabProps) {
  const sizeClasses = sizes[size];
  const variantClasses = variants[variant];

  const commonClasses = clsx(sizeClasses, variantClasses, className);

  return (
    <>
      {href ? (
        <Link
          className={clsx(
            'tab-btn',
            (selected === index && 'active') ||
              (typeof href === 'object' &&
                href?.pathname === currentPage &&
                'active'),
            commonClasses,
          )}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          className={clsx(
            'tab-btn',
            selected === index && 'active',
            commonClasses,
          )}
          role="tab"
          onClick={() => onClick?.()}
          aria-selected={selected === index}
          aria-controls={`${uniqueId}-tabpanel-${index}`}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Tab;

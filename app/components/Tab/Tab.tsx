import clsx from 'clsx';
import Link from 'next/link';

import type { UrlObject } from 'url';

interface TabProps {
  href?: UrlObject | string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'dark' | 'light';
  rounded?: 'sm' | 'none' | 'full';
  roundness?: 'sm' | 'none' | 'full';
  selected: number;
  index: number;
  uniqueId: string;
  onClick?: () => void;
}

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const colors = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  light: 'light',
};

const borderRoundness = {
  sm: 'round-sm',
  full: 'round-full',
  none: '',
};

function Tab({
  href,
  children,
  className,
  size = 'md',
  color = 'primary',
  roundness = 'none',
  selected,
  index,
  uniqueId,
  onClick,
}: TabProps) {
  const sizeClasses = sizes[size];
  const colorClasses = colors[color];
  const roundnessClasses = borderRoundness[roundness];

  const commonClasses = clsx(
    sizeClasses,
    colorClasses,
    roundnessClasses,
    className,
  );

  return (
    <div
      className={clsx(
        'tab-btn',
        clsx(selected === index && 'active'),
        commonClasses,
      )}
    >
      {href ? (
        <Link href={href}>{children}</Link>
      ) : (
        <button
          role="tab"
          onClick={() => onClick?.()}
          aria-selected={selected === index}
          aria-controls={`${uniqueId}-tabpanel-${index}`}
        >
          {children}
        </button>
      )}
    </div>
  );
}

export default Tab;

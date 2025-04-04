import clsx from 'clsx';
import Link from 'next/link';

import type { UrlObject } from 'url';

interface TabProps {
  href?: UrlObject | string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
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

function Tab({
  href,
  children,
  className,
  size = 'md',
  selected,
  index,
  uniqueId,
  onClick,
}: TabProps) {
  const sizeClasses = sizes[size];

  const commonClasses = clsx(sizeClasses, className);

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

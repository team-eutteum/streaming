import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PageTitleProps {
  label: ReactNode;
  className?: string;
}

function PageTitle({ label, className }: PageTitleProps) {
  return (
    <h2
      className={clsx(
        'text-2xl font-bold text-black mb-24 lg:text-3xl lg:mb-40',
        className,
      )}
    >
      {label}
    </h2>
  );
}

export default PageTitle;

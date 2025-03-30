import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PageTitleProps {
  label: ReactNode;
  className?: string;
}

function PageTitle({ label, className }: PageTitleProps) {
  return <h2 className={clsx('page-tit', className)}>{label}</h2>;
}

export default PageTitle;

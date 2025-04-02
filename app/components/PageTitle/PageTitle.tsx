import type { ReactNode } from 'react';
import clsx from 'clsx';

interface PageTitleProps {
  label: ReactNode;
  subTxt?: ReactNode;
  className?: string;
}

function PageTitle({ label, subTxt, className }: PageTitleProps) {
  return (
    <>
      <h2 className={clsx('f-pg-tit', className)}>{label}</h2>
      {subTxt && <p className="f-bd3 page-sub-txt">{subTxt}</p>}
    </>
  );
}

export default PageTitle;

import clsx from 'clsx';

import type { TitleAreaProps } from '@/types/commonTitle';

function PageTitle({ label, subTxt, className, updateDate }: TitleAreaProps) {
  return (
    <>
      <h2 className={clsx('f-pg-tit', className)}>{label}</h2>
      {subTxt && <p className="f-bd3 page-sub-txt">{subTxt}</p>}
      {updateDate && <span className="f-cp2 update-date">{updateDate}</span>}
    </>
  );
}

export default PageTitle;

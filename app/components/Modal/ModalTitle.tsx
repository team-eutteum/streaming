import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ModalTitleProps {
  className?: string;
}

function ModalTitle({
  className,
  children,
}: PropsWithChildren<ModalTitleProps>) {
  return <h3 className={clsx('modal-title', className)}>{children}</h3>;
}

export default ModalTitle;

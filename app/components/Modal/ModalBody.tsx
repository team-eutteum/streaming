import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ModalBodyProps {
  className?: string;
}

function ModalBody({ className, children }: PropsWithChildren<ModalBodyProps>) {
  return (
    <div className={clsx('scroll-area', className)}>
      <div className="content">{children}</div>
    </div>
  );
}

export default ModalBody;

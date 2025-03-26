import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
}

function Container({ className, children }: PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={clsx(
        'px-16 pt-40 pb-60 max-w-1360 mx-auto lg:pt-60 lg:pb-100',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;

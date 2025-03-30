import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ContainerProps {
  className?: string;
}

function Container({ className, children }: PropsWithChildren<ContainerProps>) {
  return <div className={clsx('sub-container', className)}>{children}</div>;
}

export default Container;

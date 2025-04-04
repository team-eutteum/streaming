import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';

interface TabsProps {
  hasScroll?: boolean;
}

function Tabs({ children, hasScroll }: PropsWithChildren<TabsProps>) {
  return (
    <div className="box-tab-area">
      <div className="tabs-wrap">
        <div className={clsx('tabs', hasScroll && 'scroll-x-active')}>
          {React.Children.toArray(children)?.map((child, index) =>
            React.isValidElement<{ className?: string }>(child)
              ? React.cloneElement(child, {
                  key: `tabs${index}`,
                })
              : child,
          )}
        </div>
      </div>
    </div>
  );
}

export default Tabs;

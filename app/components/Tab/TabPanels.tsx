import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';

interface TabPanelsProps {
  activeIndex: number;
}

function TabPanels({
  children,
  activeIndex,
}: PropsWithChildren<TabPanelsProps>) {
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)?.map((child, index) =>
        React.isValidElement<{ className?: string }>(child)
          ? React.cloneElement(child, {
              key: `tabPanel${index}`,
              className: `${clsx(
                child.props.className,
                index === activeIndex && 'active',
              )}`,
            })
          : child,
      )}
    </div>
  );
}

export default TabPanels;

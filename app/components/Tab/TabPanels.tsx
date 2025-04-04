import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';

function TabPanels({ children }: PropsWithChildren) {
  return (
    <div className="tab-panels">
      {React.Children.toArray(children)?.map((child, index) =>
        React.isValidElement<{ className?: string }>(child)
          ? React.cloneElement(child, {
              key: `tabPanel${index}`,
              className: `${clsx(child.props.className)}`,
            })
          : child,
      )}
    </div>
  );
}

export default TabPanels;

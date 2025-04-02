import type { PropsWithChildren } from 'react';
import React from 'react';

function Tabs({ children }: PropsWithChildren) {
  return (
    <div className="box-tab-area">
      <div className="tabs">
        {React.Children.toArray(children)?.map((child, index) =>
          React.isValidElement<{ className?: string }>(child)
            ? React.cloneElement(child, {
                key: `tabs${index}`,
              })
            : child,
        )}
      </div>
    </div>
  );
}

export default Tabs;

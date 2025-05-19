import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';

function MusicChartContainer({ children }: PropsWithChildren) {
  return (
    <div className="chart-content">
      <div className="chart-wrap">
        {React.Children.toArray(children)?.map((child, index) =>
          React.isValidElement<{ className?: string }>(child)
            ? React.cloneElement(child, {
                key: `chartList${index}`,
                className: `${clsx(child.props.className)}`,
              })
            : child,
        )}
      </div>
    </div>
  );
}

export default MusicChartContainer;

'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import clsx from 'clsx';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface TabsProps {
  hasScroll?: boolean;
  /**
   * @default true
   */
  sticky?: boolean;
  /**
   * @default 'true'
   */
  scrollable?: boolean;
}

function Tabs({
  children,
  hasScroll,
  sticky = true,
  scrollable = true,
}: PropsWithChildren<TabsProps>) {
  return (
    <div className={clsx(`box-tab-area`, sticky && 'sticky')}>
      <div className="tabs-wrap">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          className={clsx('tabs', hasScroll && 'scroll-x-active', {
            wrap: !scrollable,
          })}
        >
          {React.Children.toArray(children)?.map((child, index) =>
            React.isValidElement<{ className?: string }>(child)
              ? React.cloneElement(child, {
                  key: `tabs${index}`,
                })
              : child,
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default Tabs;

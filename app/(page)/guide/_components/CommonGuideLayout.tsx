'use client';

import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { Button, Tab, TabPanel, TabPanels, Tabs } from '@/components';
import NoData from '@/components/NoData/Nodata';
import type { CommonGuideLayoutProps } from '@/types/guide';

function CommonGuideLayout({
  tabContent,
  uniqueId,
  link,
  linkTxt,
}: CommonGuideLayoutProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleActiveTabIdx = (idx: number) => {
    setActiveTabIdx(idx);
  };

  return (
    <section className="sc-down-guide">
      {tabContent?.length > 1 && (
        <Tabs hasScroll>
          {tabContent?.map((tab, index) => (
            <Tab
              key={`tabItem${index}`}
              uniqueId={uniqueId}
              onClick={() => handleActiveTabIdx(index)}
              selected={activeTabIdx}
              index={index}
              size="lg"
            >
              {tab.label}
            </Tab>
          ))}
        </Tabs>
      )}
      <div className="guide-inner">
        <TabPanels>
          {tabContent?.map((tabItem, index) => (
            <TabPanel
              key={`${uniqueId}-downloadGuide${index}`}
              index={index}
              selected={activeTabIdx}
              uniqueId={uniqueId}
            >
              {tabItem.image?.length ? (
                tabItem.image.map((img, idx) => (
                  <div className="img-wrap" key={`tabItemImg${idx}`}>
                    <Image src={img} alt="" width={100} height={100} />
                  </div>
                ))
              ) : (
                <NoData Icon={PhotoIcon} txt={'가이드 이미지 준비중입니다.'} />
              )}
            </TabPanel>
          ))}
        </TabPanels>
        {link && (
          <div className="guide-btn-wrap">
            <Button size="lg" href={link}>
              {linkTxt}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default CommonGuideLayout;

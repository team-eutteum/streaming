'use client';

import { useState } from 'react';
import Image from 'next/image';

import { PageTitle, Tab, TabPanel, TabPanels, Tabs } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import NoData from '@/components/NoData/Nodata';

import type { StaticImageData } from 'next/image';

interface TabContentProps {
  label: string;
  image?: StaticImageData;
}

interface CommonGuideLayoutProps {
  label: string;
  // subTxt: string;
  updateDate: string;
  tabTitleContent: Array<TabContentProps>;
  uniqueId: string;
}

function CommonGuideLayout({
  label,
  // subTxt,
  updateDate,
  tabTitleContent,
  uniqueId,
}: CommonGuideLayoutProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleActiveTabIdx = (idx: number) => {
    setActiveTabIdx(idx);
  };

  return (
    <section className="sc-down-guide">
      <div className="tit-area">
        <div className="inner">
          <PageTitle
            label={label}
            subTxt={`${label} 방법에 대해 알려드립니다`}
            updateDate={updateDate}
          />
          <UrlShareButton />
        </div>
      </div>
      <Tabs hasScroll>
        {tabTitleContent?.map((tab, index) => (
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
      <div className="guide-inner">
        <TabPanels>
          {tabTitleContent?.map((tabItem, index) => (
            <TabPanel
              key={`${uniqueId}-downloadGuide${index}`}
              index={index}
              selected={activeTabIdx}
              uniqueId={uniqueId}
            >
              {tabItem.image ? (
                <div className="img-wrap">
                  <Image src={tabItem.image} alt="" width={100} height={100} />
                </div>
              ) : (
                <NoData txt={'가이드 이미지 준비중입니다.'} />
              )}
            </TabPanel>
          ))}
        </TabPanels>
      </div>
    </section>
  );
}

export default CommonGuideLayout;

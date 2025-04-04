'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Tab, Tabs, TabPanel, TabPanels } from '@/components';
import NoData from '@/components/NoData/Nodata';
import MelonGuide from '@/images/id_guide/img-id-guide-melon.jpg';
import { CONST } from '@/lib/constants';

function DetailList() {
  const tabs = [
    {
      label: CONST.TITLE.MELON,
      image: MelonGuide,
    },
    {
      label: CONST.TITLE.GENIE,
    },
    {
      label: CONST.TITLE.BUGS,
    },
    {
      label: CONST.TITLE.FLO,
    },
  ];

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleActiveTabIdx = (index: number) => {
    console.log('dlkf');
    setActiveTabIdx(index);
  };
  return (
    <section className="sc-down-guide">
      <Tabs>
        {tabs?.map((tab, index) => (
          <Tab
            key={`tabItem${index}`}
            uniqueId="musicDownload"
            onClick={() => handleActiveTabIdx(index)}
            selected={activeTabIdx}
            index={index}
            color="dark"
            size="lg"
          >
            {tab.label}
          </Tab>
        ))}
      </Tabs>
      <div className="guide-inner">
        <TabPanels>
          {tabs?.map((tabItem, index) => (
            <TabPanel
              key={`downloadGuide${index}`}
              index={index}
              selected={activeTabIdx}
              uniqueId="musicDownload"
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

export default DetailList;

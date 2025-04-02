'use client';

import { useState } from 'react';

import { Tab, Tabs, TabPanel, TabPanels } from '@/components';
import { CONST } from '@/lib/constants';

function DetailList() {
  const tabs = [
    {
      label: CONST.TITLE.MELON,
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
      <div className="inner">
        <TabPanels activeIndex={activeTabIdx}>
          <TabPanel>
            <div className="div">tab Panel1</div>
          </TabPanel>
        </TabPanels>
      </div>
    </section>
  );
}

export default DetailList;

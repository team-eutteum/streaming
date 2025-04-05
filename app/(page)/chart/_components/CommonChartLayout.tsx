'use client';

import { useState } from 'react';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';

import { Tab, TabPanel, TabPanels, Tabs } from '@/components';
import MusicChart from '@/components/MusicChart/MusicChart';
import MusicChartContainer from '@/components/MusicChart/MusicChartContainer';
import NoData from '@/components/NoData/Nodata';

import type { StaticImageData } from 'next/image';

interface TabContentProps {
  label: string;
  chart: MusicChartContentProps[];
}

// 공통 props로 빼기
interface MusicChartContentProps {
  chartName: string;
  title: string;
  rank: number;
  upDowns: string;
  image?: StaticImageData;
  chartChange?: number;
}

interface CommonChartLayoutProps {
  label: string;
  tabContent: TabContentProps[];
  uniqueId: string;
}

function CommonChartLayout({ tabContent, uniqueId }: CommonChartLayoutProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleActiveTabIdx = (idx: number) => {
    setActiveTabIdx(idx);
  };

  return (
    <section className="sc-chart">
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
      <div className="inner">
        <TabPanels>
          {tabContent?.map((tabItem, index) => (
            <TabPanel
              key={`${uniqueId}-downloadGuide${index}`}
              index={index}
              selected={activeTabIdx}
              uniqueId={uniqueId}
            >
              <MusicChartContainer>
                {tabItem?.chart.length > 0 ? (
                  tabItem?.chart?.map((chartItem, chartIndex) => (
                    <MusicChart
                      key={`${chartItem.chartName}-content${chartIndex}`}
                      // chartName={chartItem.chartName}
                      title={chartItem.title}
                      rank={chartItem?.rank}
                      upDowns={chartItem?.upDowns}
                      chartChange={chartItem?.chartChange}
                    />
                  ))
                ) : (
                  <NoData
                    Icon={ChartBarSquareIcon}
                    txt="스밍을 열심히 합시다!"
                  />
                )}
              </MusicChartContainer>
            </TabPanel>
          ))}
        </TabPanels>
      </div>
    </section>
  );
}

export default CommonChartLayout;

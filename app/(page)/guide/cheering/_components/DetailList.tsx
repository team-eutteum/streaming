'use client';

import { useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import { PageTitle, Tab, TabPanel, TabPanels, Tabs } from '@/components';
import UrlShareButton from '@/components/Button/UrlShareButton';
import NoData from '@/components/NoData/Nodata';
import LinkSelect from '@/components/Select/LinkSelect';
import LinkSelects from '@/components/Select/LinkSelects';
import { CHEERING_METHOD_GUIDE } from '@/lib/constants/guideContent.constants';

function DetailList() {
  const contents = CHEERING_METHOD_GUIDE;
  const [selectedValue, setSelectedValue] = useState('mini1');

  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const handleActiveTabIdx = (idx: number) => {
    setActiveTabIdx(idx);
  };
  const selectedItem = contents.content.find(
    (item) => item.value === selectedValue,
  );

  const cheeringTracks =
    selectedItem?.music.filter((music) => music.hasCheering) || [];

  const selectedTitle = selectedItem?.albumTitle || '앨범 선택';

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setActiveTabIdx(0);
  };

  return (
    <>
      <div className="tit-area">
        <div className="inner">
          <PageTitle
            label={contents.label}
            subTxt={`${contents.label}에 대해 알려드립니다`}
            updateDate={contents.updateDate}
          />
          <UrlShareButton />
          <LinkSelects label={selectedTitle}>
            {contents.content.map((item) => (
              <LinkSelect
                key={item.albumTitle}
                label={item.albumTitle}
                onClick={() => handleSelect(item.value)}
              />
            ))}
          </LinkSelects>
        </div>
      </div>

      <section className="sc-down-guide">
        {cheeringTracks.length > 0 && (
          <Tabs>
            {cheeringTracks.map((track, index) => (
              <Tab
                key={`track-tab-${track.title}`}
                uniqueId={contents.uniqueId}
                onClick={() => handleActiveTabIdx(index)}
                selected={activeTabIdx}
                index={index}
                size="sm"
                variant="box"
              >
                {track.title}
              </Tab>
            ))}
          </Tabs>
        )}
        <div className="guide-inner">
          <TabPanels>
            {cheeringTracks.map((track, index) => (
              <TabPanel
                key={`track-panel-${track.title}`}
                index={index}
                selected={activeTabIdx}
                uniqueId={contents.uniqueId}
              >
                {track.image ? (
                  <div className="img-wrap">
                    <Image
                      src={track.image.src}
                      alt={''}
                      width={50}
                      height={50}
                    />
                  </div>
                ) : (
                  <NoData Icon={PhotoIcon} txt="가이드 이미지 준비중입니다." />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </section>
    </>
  );
}

export default DetailList;

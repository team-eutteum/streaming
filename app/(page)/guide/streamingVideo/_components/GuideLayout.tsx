'use client';

import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { notFound } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import { Tab, TabPanels, Tabs, TabPanel } from '@/components';
import NoData from '@/components/NoData/Nodata';
import { STREAMING_GUIDE_VIDEO_CONTENT } from '@/lib/constants/guideInVideo.constants';

interface GuideLayoutProps {
  id: string;
}

export default function GuideLayout({ id }: GuideLayoutProps) {
  const tabContent = STREAMING_GUIDE_VIDEO_CONTENT;

  const [parentId, childId] = id.split('/');

  const parent = tabContent.find((tab) => tab.id === parentId);

  if (!parent) {
    notFound(); // 부모 자체가 없으면 404
  }

  if (!childId) notFound();

  const hasChild = parent.children.some((child) => child.id === childId);

  console.log(parent, 'parent');

  if (!hasChild) {
    notFound(); // 없는 자식이면 404
  }

  return (
    <section className="sc-down-guide">
      <Tabs>
        {tabContent?.map((tab, index) =>
          tab?.children?.map(
            (child, childIndex) =>
              tab?.id === parentId && (
                <SwiperSlide key={`downloadGuideVideoTab-${childIndex}`}>
                  <Tab
                    key={`${tab.id}-${child.title}`}
                    uniqueId={`downloadGuideVideoTab`}
                    href={{ pathname: child.id }}
                    selected={child.id}
                    currentPage={childId}
                    index={index}
                    size="lg"
                  >
                    {child.title}
                  </Tab>
                </SwiperSlide>
              ),
          ),
        )}
      </Tabs>

      <div className="inner">
        <TabPanels>
          {tabContent?.map((tab, index) =>
            tab?.children?.map(
              (child, childIndex) =>
                parent?.id === tab?.id &&
                child?.id === childId && (
                  <TabPanel
                    key={index}
                    index={index}
                    selected={index}
                    uniqueId={`downloadGuideVideoTabPanel-${childIndex}`}
                  >
                    {child.video ? (
                      <div className="video-wrap">
                        <video src={child.video} muted autoPlay controls />
                      </div>
                    ) : (
                      <NoData
                        Icon={ArrowPathIcon}
                        txt={`비디오 불러오기에 실패하였습니다.\n 새로고침을 다시 해주시기 바랍니다.`}
                      />
                    )}
                  </TabPanel>
                ),
            ),
          )}
        </TabPanels>
      </div>
    </section>
  );
}

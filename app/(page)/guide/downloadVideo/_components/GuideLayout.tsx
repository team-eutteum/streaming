'use client';

import { notFound } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import { Tab, TabPanels, Tabs, TabPanel } from '@/components';
import { DOWNLOAD_GUIDE_VIDEO_CONTENT } from '@/lib/constants/downloadGuideVideo.constants';

interface GuideLayoutProps {
  id: string;
}

export default function GuideLayout({ id }: GuideLayoutProps) {
  const tabContent = DOWNLOAD_GUIDE_VIDEO_CONTENT;

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
                    <div className="video-wrap">
                      <video src={child.video} muted autoPlay controls />
                    </div>
                  </TabPanel>
                ),
            ),
          )}
        </TabPanels>
      </div>
    </section>
  );
}

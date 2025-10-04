'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { notFound } from 'next/navigation';
import { SwiperSlide } from 'swiper/react';

import { Tab, TabPanels, Tabs, TabPanel } from '@/components';
import { QNA_CONTENT } from '@/lib/constants/qna.constants';

interface QnaLayoutProps {
  params: string;
}

export default function QnaLayout({ params }: QnaLayoutProps) {
  const tabContent = QNA_CONTENT;

  const isValidTab = tabContent.list.some((tab) => tab.id === params);
  if (!isValidTab) {
    notFound();
  }

  const [openedAcco, setOpenedAcco] = useState<number | null>(null);

  return (
    <>
      <Tabs>
        {tabContent?.list?.map((tab, index) => (
          <SwiperSlide key={`qnaTab-${index}`}>
            <Tab
              uniqueId={`qnaTab`}
              href={{ pathname: tab.id }}
              selected={tab.id}
              currentPage={params}
              index={index}
              size="lg"
            >
              {tab.title}
            </Tab>
          </SwiperSlide>
        ))}
      </Tabs>

      <div className="inner">
        <TabPanels>
          {tabContent?.list?.map((tab, index) => {
            return (
              params === tab.id && (
                <TabPanel
                  key={index}
                  index={index}
                  selected={index}
                  uniqueId={`qnaTab-${index}`}
                >
                  {tab.content.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={clsx(
                          'accordion-list',
                          openedAcco === idx && 'active',
                        )}
                      >
                        <div className={clsx('accordion-head')}>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => setOpenedAcco(idx)}
                          >
                            <span className="q-mark">Q{idx + 1}</span>
                            <span className="tit">{item.title}</span>
                          </button>
                        </div>

                        <AnimatePresence>
                          {openedAcco === idx && (
                            <motion.div
                              className="accordion-body"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.43, 0.13, 0.23, 0.96],
                              }}
                            >
                              <div
                                className="txt"
                                dangerouslySetInnerHTML={{ __html: item.body }}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </TabPanel>
              )
            );
          })}
        </TabPanels>
      </div>
    </>
  );
}

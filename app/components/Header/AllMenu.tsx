'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { NAV } from '@/lib/constants/nav.constant';
interface AllMenuProps {
  isMenuOpened: boolean;
}
function AllMenu({ isMenuOpened }: AllMenuProps) {
  const [twoDepthOpenedIdx, setTwoDepthOpenedIdx] = useState<number | null>(
    null,
  );
  const handleTwoDepthOpen = (twoDepthIdx: number | null) => {
    setTwoDepthOpenedIdx((prevIdx) =>
      prevIdx === twoDepthIdx ? null : twoDepthIdx,
    );
  };
  const allMenuList = [
    {
      title: '가이드',
      path: '/guide',
      children: [
        { title: '스트리밍 리스트', path: '/guide/list' },
        { title: '다운로드', path: '/guide/download' },
        { title: '다운로드', path: '/guide/download' },
        { title: '다운로드', path: '/guide/download' },
        { title: '다운로드', path: '/guide/download' },
      ],
    },
    {
      title: '투표',
      path: '/guide',
      children: [
        { title: '투표', path: '/guide/list' },
        { title: '투표', path: '/guide/download' },
        { title: '투표', path: '/guide/download' },
        { title: '투표', path: '/guide/download' },
        { title: '투표', path: '/guide/download' },
        { title: '투표', path: '/guide/download' },
      ],
    },
  ];
  return (
    <AnimatePresence>
      {isMenuOpened ? (
        <motion.div
          className="menu-area"
          initial={{ left: '-100%' }}
          animate={{ left: 0 }}
          exit={{ left: '-100%' }}
          transition={{ duration: 0.2 }}
        >
          <div className="scroll-area">
            <ul className="one-depth">
              {NAV?.map((oneDepth, oneIndex) => (
                <li
                  className={clsx(
                    'one-list',
                    twoDepthOpenedIdx === oneIndex && 'active',
                  )}
                  key={`oneDepth${oneIndex}`}
                >
                  <div className="one-link">
                    <Link href={oneDepth.path}>{oneDepth.title}</Link>
                    <button
                      className="open-two-depth"
                      type="button"
                      onClick={() => handleTwoDepthOpen(oneIndex)}
                    >
                      <i />
                    </button>
                  </div>

                  <AnimatePresence>
                    {oneDepth?.children && twoDepthOpenedIdx === oneIndex && (
                      <motion.ul
                        className="two-depth"
                        key={`twoDepth${oneIndex}`}
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {oneDepth?.children.map((twoDepth, index) => (
                          <li className="two-list" key={`twoDepth${index}`}>
                            <Link className="two-link" href={twoDepth.path}>
                              {twoDepth.title}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default AllMenu;

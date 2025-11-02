'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { NAV } from '@/lib/constants/nav.constant';
interface AllMenuProps {
  isMenuOpened: boolean;
  pathName: string;
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

  useEffect(() => {
    if (!isMenuOpened) {
      setTwoDepthOpenedIdx(null);
    }
  }, [isMenuOpened]);
  return (
    <AnimatePresence>
      {isMenuOpened && (
        <motion.div
          className="all-menu"
          initial={{ left: '-100%' }}
          animate={{ left: 0 }}
          exit={{ left: '-100%' }}
          transition={{ duration: 0.2 }}
        >
          <div className="scroll-area">
            <ul className="one-depth">
              {NAV?.map(
                (oneDepth, oneIndex) =>
                  /* one-depth */
                  oneDepth.opened !== false && (
                    <li
                      className={clsx(
                        'one-list',
                        twoDepthOpenedIdx === oneIndex && 'active',
                      )}
                      key={`oneDepth${oneIndex}`}
                    >
                      {oneDepth?.children ? (
                        <button
                          className="one-link"
                          onClick={() => handleTwoDepthOpen(oneIndex)}
                        >
                          {oneDepth.title}
                          <div className="open-two-depth">
                            <i />
                          </div>
                        </button>
                      ) : (
                        <Link className="one-link" href={oneDepth.path}>
                          {oneDepth.title}
                        </Link>
                      )}
                      <AnimatePresence>
                        {oneDepth?.children &&
                          twoDepthOpenedIdx === oneIndex && (
                            /* two-depth */
                            <motion.ul
                              className="two-depth"
                              key={`twoDepth${oneIndex}`}
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {oneDepth?.children.map(
                                (twoDepth, index) =>
                                  twoDepth.opened && (
                                    <li
                                      className="two-list"
                                      key={`twoDepth${index}`}
                                    >
                                      <Link
                                        className="two-link"
                                        href={twoDepth.path}
                                      >
                                        {twoDepth.title}
                                      </Link>
                                    </li>
                                  ),
                              )}
                            </motion.ul>
                          )}
                      </AnimatePresence>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AllMenu;

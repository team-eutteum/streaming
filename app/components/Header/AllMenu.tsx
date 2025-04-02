'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!isMenuOpened) {
      setTwoDepthOpenedIdx(null);
    }
  }, [isMenuOpened]);
  return (
    <AnimatePresence>
      {isMenuOpened && (
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
                /* one-depth */
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
                      /* two-depth */
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
      )}
    </AnimatePresence>
  );
}

export default AllMenu;

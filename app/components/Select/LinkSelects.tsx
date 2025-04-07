'use client';

import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

interface LinkSelectsProps {
  label: string;
}

function LinkSelects({ children, label }: PropsWithChildren<LinkSelectsProps>) {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenedState = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className={clsx('link-select-wrap', isOpened && 'active')}>
      <button className="txt f-bd3" type="button" onClick={handleOpenedState}>
        <span>{label}</span>
        <span className="icon">
          <i>
            <ChevronDownIcon />
          </i>
        </span>
      </button>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="link-select"
            initial={{ height: 0 }}
            animate={{ height: isOpened ? 'auto' : 0 }}
            exit={{ height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LinkSelects;

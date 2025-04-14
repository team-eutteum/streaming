'use client';

import type { PropsWithChildren } from 'react';
import { useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

import { useOutsideClick } from '@/hooks/useOutsideClick';

interface LinkSelectsProps {
  label: string;
  onSelect?: () => void;
}

function LinkSelects({
  children,
  label,
  onSelect,
}: PropsWithChildren<LinkSelectsProps>) {
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOpenedState = () => {
    setIsOpened(!isOpened);
  };

  useOutsideClick(selectRef, () => {
    if (isOpened) setIsOpened(false);
  });

  const handleSelectAndClose = (child: React.ReactNode) => {
    return (
      <div
        onClick={() => {
          onSelect?.();
          setIsOpened(false);
        }}
      >
        {child}
      </div>
    );
  };

  return (
    <div
      className={clsx('link-select-wrap', isOpened && 'active')}
      ref={selectRef}
    >
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
            {Array.isArray(children)
              ? children.map((child, idx) => (
                  <div key={idx}>{handleSelectAndClose(child)}</div>
                ))
              : handleSelectAndClose(children)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LinkSelects;

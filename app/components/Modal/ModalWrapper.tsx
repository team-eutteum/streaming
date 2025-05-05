import type { PropsWithChildren } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

export interface ModalWrapperProps {
  className?: string;
  onClose?: () => void;
}

function ModalWrapper({
  className,
  onClose,
  children,
}: PropsWithChildren<ModalWrapperProps>) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={clsx('modal', className)}>
          {children}
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="모달 닫기"
          >
            <i>
              <XMarkIcon />
            </i>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalWrapper;

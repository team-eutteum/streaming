'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components';

function ModalOneClickIOS({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="modal">
          <div className="scroll-area">
            <div className="content">
              <div className="list-wrap">
                <p className="list-tit f-bd3">MELON</p>
                <ul className="grid-1">
                  <li className="list">
                    <Button size="lg" href={'https://tinyurl.com/ysxyf2b4'}>
                      원클릭
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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

export default ModalOneClickIOS;

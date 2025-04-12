'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/components';

function ModalOneClickAndroid({ onClose }: { onClose: () => void }) {
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
                <ul className="grid-2">
                  <li className="list">
                    <Button size="lg" href={'https://tinyurl.com/2yv3tnhf'}>
                      원클릭1
                    </Button>
                  </li>
                  <li className="list">
                    <Button size="lg" href={'https://tinyurl.com/bde2rk52'}>
                      원클릭2
                    </Button>
                  </li>
                  <li className="list">
                    <Button size="lg" href={'https://tinyurl.com/29nw6t39'}>
                      원클릭3
                    </Button>
                  </li>
                  <li className="list">
                    <Button size="lg" href={'https://tinyurl.com/4428yduj'}>
                      원클릭4
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

export default ModalOneClickAndroid;

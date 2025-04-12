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
                <p className="list-tit f-bd3">MELON(윈도우)</p>
                <ul className="grid-1">
                  <li className="list">
                    <Button
                      size="lg"
                      onClick={() => {
                        setTimeout(() => {
                          window.location.href =
                            'melonplayer://play?menuid=0&cflag=1&cid=36582681';
                        }, 1000);
                      }}
                    >
                      원클릭
                    </Button>
                  </li>
                </ul>
              </div>
              <div className="list-wrap">
                <p className="list-tit f-bd3">MELON(맥)</p>
                <ul className="grid-1">
                  <li className="list">
                    <Button
                      size="lg"
                      href={
                        'melonplayer://play?menuid=0&cflag=1&cid=38433535,37098744,36717264,37956036,37956037,38433535,37431365,3709874437378932,37824953,38433535,37098744,37640352,36717264,37956036,38433535,37378932,37098744,37431365,37640352'
                      }
                    >
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

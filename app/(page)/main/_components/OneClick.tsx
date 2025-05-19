'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { PageTitle } from '@/components';

import ModalOneClickBugs from './ModalOneClickBugs';
import ModalOneClickFlo from './ModalOneClickFlo';
import ModalOneClickGenie from './ModalOneClickGenie';
import ModalOneClickMelon from './ModalOneClickMelon';
import ModalOneClickVibe from './ModalOneClickVibe';
import OneClickSMS from './OneClickSMS';

const oneClickList = [
  {
    label: 'MELON',
    src: '/images/main/logo/melon.png',
    modal: (onClose: () => void) => <ModalOneClickMelon onClose={onClose} />,
  },
  {
    label: 'GENIE',
    src: '/images/main/logo/genie.svg',
    modal: (onClose: () => void) => <ModalOneClickGenie onClose={onClose} />,
  },
  {
    label: 'BUGS',
    src: '/images/main/logo/bugs.svg',
    modal: (onClose: () => void) => <ModalOneClickBugs onClose={onClose} />,
  },
  {
    label: 'VIBE',
    src: '/images/main/logo/vibe.svg',
    modal: (onClose: () => void) => <ModalOneClickVibe onClose={onClose} />,
  },
  {
    label: 'FLO',
    src: '/images/main/logo/flo.svg',
    modal: (onClose: () => void) => <ModalOneClickFlo onClose={onClose} />,
  },
];

function OneClick() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const handleOpenModal = (idx: number) => {
    setModalIndex(idx);
  };
  const handleCloseModal = () => setModalIndex(null);

  return (
    <section className="sc-oneclick">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="원클릭" />
        </div>
        <div className="container">
          <ul className="oneclick-list">
            {oneClickList?.map((item, index) => (
              <React.Fragment key={`oneClicklist-${item.label}`}>
                <li onClick={() => handleOpenModal(index)}>
                  <div className="img-wrap">
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={100}
                      height={100}
                    />
                  </div>
                </li>
                {modalIndex === index && item.modal(handleCloseModal)}
              </React.Fragment>
            ))}
          </ul>
          <OneClickSMS />
        </div>
      </div>
    </section>
  );
}

export default OneClick;

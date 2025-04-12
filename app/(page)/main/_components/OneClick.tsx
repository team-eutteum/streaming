'use client';

import React, { useState } from 'react';
import {
  DevicePhoneMobileIcon,
  // DeviceTabletIcon,
  // ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

import { PageTitle } from '@/components';

import ModalOneClickAndroid from './ModalOneClickAndroid';
import ModalOneClickIOS from './ModalOneClickIOS';

const oneClickList = [
  {
    label: 'Android',
    icon: <DevicePhoneMobileIcon />,
    modal: (onClose: () => void) => <ModalOneClickAndroid onClose={onClose} />,
  },
  {
    label: 'IOS',
    icon: <DevicePhoneMobileIcon />,
    modal: (onClose: () => void) => <ModalOneClickIOS onClose={onClose} />,
  },
  // {
  //   label: 'IPad',
  //   icon: <DeviceTabletIcon />,
  //   modal: (onClose: () => void) => <ModalOneClickIOS onClose={onClose} />,
  // },
  // {
  //   label: 'PC',
  //   icon: <ComputerDesktopIcon />,
  //   modal: (onClose: () => void) => <ModalOneClickAndroid onClose={onClose} />,
  // },
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
          {oneClickList?.map((item, index) => (
            <React.Fragment key={`oneClicklist${index}`}>
              <button type="button" onClick={() => handleOpenModal(index)}>
                <div className="box">
                  <i>{item.icon}</i>
                </div>
                <p className="txt f-bd3">{item.label}</p>
              </button>
              {modalIndex === index && item.modal(handleCloseModal)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OneClick;

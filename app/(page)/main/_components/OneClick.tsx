import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';

import { PageTitle } from '@/components';

const oneClickList = [
  {
    label: 'Android',
    icon: <DevicePhoneMobileIcon />,
  },
  {
    label: 'IOS',
    icon: <DevicePhoneMobileIcon />,
  },
  {
    label: 'IPad',
    icon: <DeviceTabletIcon />,
  },
  {
    label: 'PC',
    icon: <ComputerDesktopIcon />,
  },
];

function OneClick() {
  return (
    <section className="sc-oneclick">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="원클릭" />
        </div>
        <div className="container">
          {oneClickList?.map((item, index) => (
            <button type="button" key={`oneClicklist${index}`}>
              <div className="box">
                <i>{item.icon}</i>
              </div>
              <p className="txt f-bd3">{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OneClick;

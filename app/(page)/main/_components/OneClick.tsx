import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { PageTitle } from '@/components';

function OneClick() {
  return (
    <section className="sc-oneclick">
      <div className="inner">
        <div className="tit-area">
          <div className="page-tit">
            <PageTitle label="원클릭" />
          </div>
        </div>
        <div className="container">
          <Link href={'/main'}>
            <div className="box">
              <i>
                <DevicePhoneMobileIcon />
              </i>
            </div>
            <p className="txt">Android</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <DevicePhoneMobileIcon />
              </i>
            </div>
            <p className="txt">IOS</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <DeviceTabletIcon />
              </i>
            </div>
            <p className="txt">IPad</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <ComputerDesktopIcon />
              </i>
            </div>
            <p className="txt">PC</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OneClick;

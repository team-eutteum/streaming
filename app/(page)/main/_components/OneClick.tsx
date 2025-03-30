import AndroidIcon from '@mui/icons-material/Android';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletIcon from '@mui/icons-material/Tablet';
import Link from 'next/link';

function OneClick() {
  return (
    <section className="sc-oneclick">
      <div className="inner">
        <h2 className="tit">원클릭</h2>
        <div className="container flex items-center">
          <Link href={'/main'}>
            <div className="box">
              <i>
                <AndroidIcon />
              </i>
            </div>
            <p className="txt">Android</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <PhoneIphoneIcon />
              </i>
            </div>
            <p className="txt">IOS</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <TabletIcon />
              </i>
            </div>
            <p className="txt">IPad</p>
          </Link>
          <Link href={'/main'}>
            <div className="box">
              <i>
                <LaptopChromebookIcon />
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

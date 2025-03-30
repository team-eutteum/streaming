import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link href={'/'}>로고</Link>
        </h1>
        <button className="btn-menu" type="button">
          <i>
            <Bars3CenterLeftIcon />
          </i>
        </button>
      </div>
    </header>
  );
}

export default Header;

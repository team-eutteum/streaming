'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import AllMenu from './AllMenu';

function Header() {
  const pathName = usePathname();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathName]);
  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link href={'/'}>로고</Link>
        </h1>
        <button
          className={clsx('btn-menu', isMenuOpened && 'active')}
          type="button"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <i />
          {/* <i>
            <Bars3CenterLeftIcon />
          </i> */}
        </button>
        <AllMenu isMenuOpened={isMenuOpened} pathName={pathName} />
      </div>
    </header>
  );
}

export default Header;

'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import AllMenu from './AllMenu';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
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
        <AllMenu isMenuOpened={isMenuOpened} />
      </div>
    </header>
  );
}

export default Header;

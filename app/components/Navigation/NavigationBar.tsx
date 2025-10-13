'use client';

import { useEffect, useState } from 'react';
import {
  HomeIcon,
  BookmarkIcon,
  PresentationChartBarIcon,
  ListBulletIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CONST } from '@/lib/constants';

const navbars = [
  { href: '/main', icon: <HomeIcon />, label: '홈' },
  {
    href: '/guide/streaming',
    icon: <BookmarkIcon />,
    label: CONST.TITLE.GUIDE,
  },
  {
    href: '/chart/melon',
    icon: <PresentationChartBarIcon />,
    label: CONST.TITLE.CHART,
  },
  {
    href: '/guide/list',
    icon: <ListBulletIcon />,
    label: '스밍',
  },
  {
    href: '/vote/collect',
    icon: <CheckIcon />,
    label: CONST.TITLE.VOTE,
  },
];

function NavigationBar() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname.split('/')[1]);

  useEffect(() => {
    setCurrentPath(pathname.split('/')[1]);
    if (
      pathname.split('/')[1] === 'guide' &&
      pathname.split('/')[2] === 'list'
    ) {
      setCurrentPath('list');
    }
  }, [pathname]);
  return (
    <nav className="nav-bar">
      {navbars.map((nav, index) => (
        <Link
          className={clsx(
            nav.href.includes('guide') && nav.href.includes('list')
              ? ''
              : nav.href.includes(currentPath) && 'active',
            nav.href.includes('list') &&
              currentPath.includes('list') &&
              'active',
          )}
          key={index}
          href={nav.href}
        >
          <span className={clsx('nav-icon')}>{nav.icon}</span>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;

import {
  HomeIcon,
  BookmarkIcon,
  PresentationChartBarIcon,
  ListBulletIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { CONST } from '@/lib/constants';

const navbars = [
  { href: '/', icon: <HomeIcon />, label: '홈' },
  {
    href: '/guide',
    icon: <BookmarkIcon />,
    label: CONST.TITLE.GUIDE,
  },
  {
    href: '/chart',
    icon: <PresentationChartBarIcon />,
    label: CONST.TITLE.CHART,
  },
  {
    href: '/guide/list',
    icon: <ListBulletIcon />,
    label: '스밍',
  },
  {
    href: '/vote',
    icon: <CheckIcon />,
    label: CONST.TITLE.VOTE,
  },
];

function NavigationBar() {
  return (
    <nav className="sticky bottom-0 z-20 flex items-center justify-between gap-10 bg-white lg:hidden">
      {navbars.map((nav, index) => (
        <Link
          key={index}
          href={nav.href}
          className="flex flex-col items-center justify-center flex-1 py-4 text-xs text-center gap-y-3"
        >
          <span className="w-24 text-black">{nav.icon}</span>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;

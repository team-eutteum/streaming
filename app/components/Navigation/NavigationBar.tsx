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
    <nav className="nav-bar">
      {navbars.map((nav, index) => (
        <Link key={index} href={nav.href}>
          <span className="nav-icon">{nav.icon}</span>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavigationBar;

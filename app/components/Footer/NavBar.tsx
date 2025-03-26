import BookmarkIcon from '@mui/icons-material/Bookmark';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import Link from 'next/link';
function NavBar() {
  return (
    <div className="nav-wrap">
      <div className="inner">
        <ul className="nav-bar">
          <li className="list">
            <Link href={'/main'}>
              <i className="icon">
                <HomeIcon />
              </i>

              <p className="txt">홈</p>
            </Link>
          </li>
          <li className="list">
            <Link href={'/guide'}>
              <i className="icon">
                <BookmarkIcon />
              </i>
              <p className="txt">가이드</p>
            </Link>
          </li>
          <li className="list">
            <Link href={'/main'}>
              <i className="icon">
                <InsertChartOutlinedOutlinedIcon />
              </i>
              <p className="txt">순위</p>
            </Link>
          </li>
          <li className="list">
            <Link href={'/main'}>
              <i className="icon">
                <PlaylistPlayOutlinedIcon />
              </i>
              <p className="txt">스밍 리스트</p>
            </Link>
          </li>
          <li className="list">
            <Link href={'/main'}>
              <i className="icon">
                <CheckBoxOutlinedIcon />
              </i>
              <p className="txt">투표</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

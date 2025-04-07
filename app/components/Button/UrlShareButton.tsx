// import { ShareIcon } from '@heroicons/react/16/solid';
import { useEffect } from 'react';
import { ShareIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

function UrlShareButton() {
  const pathname = usePathname();
  console.log(pathname, 'path');
  const link = `${pathname}`;

  const shareData = {
    // title: 'RIIZE STREAMING',
    // text: 'RIIZE STREAMING',
    url: link,
  };

  const handleUrlShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="btn-share" type="button" onClick={handleUrlShare}>
      <i>
        <ShareIcon />
      </i>
    </button>
  );
}
export default UrlShareButton;

import { ShareIcon } from '@heroicons/react/24/solid';
import { usePathname } from 'next/navigation';

function UrlShareButton() {
  const pathname = usePathname();
  console.log(pathname, 'path');
  const link = `${pathname}`;

  const shareData = {
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
    <button
      className="btn-share"
      type="button"
      onClick={handleUrlShare}
      aria-label="페이지 공유하기"
    >
      <i>
        <ShareIcon />
      </i>
    </button>
  );
}
export default UrlShareButton;

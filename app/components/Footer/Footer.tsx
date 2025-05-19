import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-list">
        <Link
          href="https://x.com/riize_stream?s=21"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/main/logo/x.svg" alt="X" width={30} height={30} />
        </Link>
        <Link
          href="https://pf.kakao.com/_LWmxfn"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/main/logo/kakaotalk.svg"
            alt="KAKAO"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <p className="email">riizestreaming@gmail.com</p>
      <p className="copyright">
        &copy; 2025 Riize Streaming. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

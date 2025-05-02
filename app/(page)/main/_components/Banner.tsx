import Link from 'next/link';

function Banner() {
  return (
    <section className="sc-banner">
      <Link
        href="https://youtu.be/vmL-XgxwQZU?si=U38cNrhJT6DsdeLq"
        target="_blank"
        className="banner"
      >
        <div className="banner-text">
          <span>Let&apos;s Go</span>
          <span>&apos;Bag Bad Back&apos; MV</span>
        </div>
      </Link>
    </section>
  );
}

export default Banner;

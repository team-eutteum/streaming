'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerSwiper() {
  return (
    <Swiper
      className="swiper-banner"
      modules={[Pagination]}
      speed={600}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide className="bg-bbb">
        <Link
          href="https://youtu.be/vmL-XgxwQZU?si=U38cNrhJT6DsdeLq"
          target="_blank"
          className="banner-slide"
        >
          <Image src="/images/main/banner/bbb.png" alt="Bag Bad Back" fill />
          <div className="banner-slide-text">
            <span>Let&apos;s Go</span>
            <span>&apos;Bag Bad Back&apos; MV</span>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;

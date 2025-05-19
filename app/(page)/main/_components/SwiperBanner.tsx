'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerSwiper() {
  return (
    <Swiper
      className="swiper-banner"
      modules={[Pagination, Autoplay]}
      speed={600}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>
        <Link
          href="https://youtu.be/vLUtHODdLzk?si=swRHDlE8IGXsrNCq"
          target="_blank"
          className="banner-slide"
        >
          <Image src="/images/main/banner/flyup.jpg" alt="Fly Up" fill />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          href="https://youtu.be/vmL-XgxwQZU?si=U38cNrhJT6DsdeLq"
          target="_blank"
          className="banner-slide"
        >
          <Image src="/images/main/banner/bbb.png" alt="Bag Bad Back" fill />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default BannerSwiper;

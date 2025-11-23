'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerSwiper() {
  /* 
    썸네일 추출 방법 
    https://img.youtube.com/vi/동영상고유아이디/maxresdefault.jpg
    동영상고유아이디 예시) 
    https://www.youtube.com/watch?v=vLUtHODdLzk&list=PLVtDfG0ugTx7Z_XHyRiN54Z3jyQCUUYw1
    영상 url에서 v= 뒤에 있는 "vLUtHODdLzk"이 동영상고유아이디
  **/

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

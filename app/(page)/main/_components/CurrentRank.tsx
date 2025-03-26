'use client';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function CurrentRank() {
  return (
    <div className="inner">
      <h2 className="tit">현재 순위</h2>
      <div className="rank-container">
        <Swiper
          className="rank-swiper"
          slidesPerView="auto"
          freeMode
          spaceBetween={30}
          modules={[FreeMode]}
        >
          <SwiperSlide>
            <h3 className="rank-tit">MELON</h3>
            <ul className="list-wrap">
              <li className="list" />
            </ul>
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="rank-tit">GENIE</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="rank-tit">BUGS</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h3 className="tit">FLO</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CurrentRank;

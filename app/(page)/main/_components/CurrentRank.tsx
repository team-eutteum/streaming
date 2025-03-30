'use client';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function CurrentRank() {
  const currentRankList = [
    {
      site: 'MELON',
      musicList: [
        {
          rank: 1,
          tit: 'Boom Boom Bass',
          upDown: '-',
        },
      ],
    },
  ];
  return (
    <div className="inner pl-30">
      <h2 className="tit">현재 순위</h2>
      <div className="rank-container mt-24 mr-30">
        <Swiper
          className="rank-swiper mr-30 !overflow-visible"
          slidesPerView={1.5}
          freeMode
          spaceBetween={30}
          modules={[FreeMode]}
        >
          <SwiperSlide className="border-1 w-80 p-20 rounded-lg">
            <h3 className="rank-tit">MELON</h3>
            <ul className="list-wrap mt-16">
              <li className="list flex items-center justify-between">
                <div className="box flex items-center">
                  <span className="rank">1</span>
                  <p className="txt ml-12">Boom Boom Bass</p>
                </div>
                <span className="up-down flex items-center text-lg">-</span>
              </li>
              <li className="list flex items-center justify-between mt-12">
                <div className="box flex items-center">
                  <span className="rank">2</span>
                  <p className="txt ml-12">Hug</p>
                </div>
                <span className="up-down text-red-600 flex items-center text-lg">
                  <i className="block">
                    <ArrowDropUpOutlinedIcon className="!text-2xl" />
                  </i>
                  1
                </span>
              </li>
              <li className="list flex items-center justify-between mt-12">
                <div className="box flex items-center">
                  <span className="rank">3</span>
                  <p className="txt ml-12">Love119</p>
                </div>
                <span className="up-down text-blue-700 flex items-center text-lg">
                  <i className="block">
                    <ArrowDropDownOutlinedIcon className="!text-2xl" />
                  </i>
                  1
                </span>
              </li>
            </ul>
          </SwiperSlide>
          <SwiperSlide className="border-1 w-80 p-20">
            <h3 className="rank-tit">GENIE</h3>
            <ul className="list-wrap">
              <li className="list" />
            </ul>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CurrentRank;

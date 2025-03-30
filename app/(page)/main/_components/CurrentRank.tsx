'use client';

import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import clsx from 'clsx';

import { PageTitle } from '@/components';

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
    <>
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="현재 순위" />
          <div className="rank-time">2025.03.27 18:00</div>
        </div>
      </div>
      <div className="rank-container">
        <div className="rank-swiper">
          <div className="scroll-area">
            <div className="rank-content">
              <ul className="rank-wrap">
                <li className={clsx('rank-list', 'melon')}>
                  <div className="cate">MELON</div>
                  <div className="rank-box">
                    <p className="tit">Boom Boom Bass</p>
                    <div className="divide">
                      <div className="rank">
                        1<span>위</span>
                      </div>
                      <span className="rank-change" />
                    </div>
                  </div>
                </li>
                <li className={clsx('rank-list', 'melon')}>
                  <div className="cate">MELON</div>
                  <div className="rank-box">
                    <p className="tit">HUG</p>
                    <div className="divide">
                      <div className="rank">
                        2<span>위</span>
                      </div>
                      <span className="rank-change up">1</span>
                    </div>
                  </div>
                </li>
                <li className={clsx('rank-list', 'melon')}>
                  <div className="cate">MELON</div>
                  <div className="rank-box">
                    <p className="tit">LOVE119</p>
                    <div className="divide">
                      <div className="rank">
                        3<span>위</span>
                      </div>
                      <span className="rank-change down">1</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rank-content">
              <ul className="rank-wrap">
                <li className={clsx('rank-list', 'genie')}>
                  <div className="cate">GENIE</div>
                  <div className="rank-box">
                    <p className="tit">Boom Boom Bass</p>
                    <div className="divide">
                      <div className="rank">
                        1<span>위</span>
                      </div>
                      <span className="rank-change" />
                    </div>
                  </div>
                </li>
                <li className={clsx('rank-list', 'bugs')}>
                  <div className="cate">BUGS</div>
                  <div className="rank-box">
                    <p className="tit">
                      줄넘김 테스트줄넘김 테스트줄넘김 테스트줄넘김 테스트
                    </p>
                    <div className="divide">
                      <div className="rank">
                        2<span>위</span>
                      </div>
                      <span className="rank-change up">1</span>
                    </div>
                  </div>
                </li>
                <li className={clsx('rank-list', 'flos')}>
                  <div className="cate">FLO</div>
                  <div className="rank-box">
                    <p className="tit">LOVE119</p>
                    <div className="divide">
                      <div className="rank">
                        3<span>위</span>
                      </div>
                      <span className="rank-change down">1</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentRank;

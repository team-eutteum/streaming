'use client';
import clsx from 'clsx';

import { PageTitle } from '@/components';

function CurrentRank() {
  // const currentRankList = [
  //   {
  //     site: 'MELON',
  //     musicList: [
  //       {
  //         rank: 1,
  //         tit: 'Boom Boom Bass',
  //         upDown: '-',
  //       },
  //     ],
  //   },
  // ];
  return (
    <section className="sc-rank">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="현재 순위" />
          <div className="rank-time f-cp1">2025.03.27 18:00</div>
        </div>
      </div>
      <div className="inner-wide">
        <div className="rank-container">
          <div className="rank-swiper">
            <div className="scroll-area">
              <div className="rank-content">
                <ul className="rank-wrap">
                  <li className={clsx('rank-list', 'melon')}>
                    <div className="cate f-bd3 -b">MELON</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                  <li className={clsx('rank-list', 'melon')}>
                    <div className="cate f-bd3 -b">MELON</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                  <li className={clsx('rank-list', 'melon')}>
                    <div className="cate f-bd3 -b">MELON</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                  <li className={clsx('rank-list', 'melon')}>
                    <div className="cate f-bd3 -b">MELON</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rank-content">
                <ul className="rank-wrap">
                  <li className={clsx('rank-list', 'genie')}>
                    <div className="cate f-bd3 -b">GENIE</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                  <li className={clsx('rank-list', 'bugs')}>
                    <div className="cate f-bd3 -b">BUGS</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>
                  <li className={clsx('rank-list', 'flo')}>
                    <div className="cate f-bd3 -b">FLO</div>
                    <div className="rank-box">
                      <p className="tit f-bd2">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="rank f-bd1 -b">
                          1<span className="f-bd3">위</span>
                        </div>
                        <span className="rank-change f-bd3" />
                      </div>
                    </div>
                  </li>{' '}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentRank;

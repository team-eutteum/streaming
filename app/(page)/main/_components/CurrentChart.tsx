'use client';
import clsx from 'clsx';
import Image from 'next/image';

import { PageTitle } from '@/components';
import AlbumImg from 'public/images/@album-ex.jpg';

function CurrentChart() {
  return (
    <section className="sc-chart">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label="현재 순위" />
          <div className="chart-time f-cp1">2025.03.27 18:00</div>
        </div>
      </div>
      <div className="inner-wide">
        <div className="chart-container">
          <div className="chart-swiper">
            <div className="scroll-area">
              <table className="chart-content">
                <tbody className="chart-wrap">
                  <tr className={clsx('chart-list', 'melon')}>
                    <th className="cate f-bd4 -b">MELON</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                  <tr className={clsx('chart-list', 'melon')}>
                    <th className="cate f-bd4 -b">MELON</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                  <tr className={clsx('chart-list', 'melon')}>
                    <th className="cate f-bd4 -b">MELON</th>

                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                  <tr className={clsx('chart-list', 'melon')}>
                    <th className="cate f-bd4 -b">MELON</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="chart-content">
                <tbody className="chart-wrap">
                  <tr className={clsx('chart-list', 'genie')}>
                    <th className="cate f-bd4 -b">genie</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                  <tr className={clsx('chart-list', 'bugs')}>
                    <th className="cate f-bd4 -b">bugs</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4 up">1</span>
                      </div>
                    </td>
                  </tr>
                  <tr className={clsx('chart-list', 'flo')}>
                    <th className="cate f-bd4 -b">flo</th>
                    <td className="chart-box">
                      <div className="img-wrap">
                        <Image src={AlbumImg} alt="" width={50} height={50} />
                      </div>
                      <p className="tit f-bd4">Boom Boom Bass</p>
                      <div className="divide">
                        <div className="chart f-bd3 -b">
                          1<span className="f-bd4">위</span>
                        </div>
                        <span className="chart-change f-bd4" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentChart;

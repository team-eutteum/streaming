import { Button } from '@/components';
import { RADIO_APPLICATION_GUIDE } from '@/lib/constants/guideContent.constants';
import { BROADCAST_CONTENT } from '@/lib/constants/voteContent.constants';

function OneClickSMS() {
  const smsRadioList = RADIO_APPLICATION_GUIDE.content;
  const smsMusicLCore = BROADCAST_CONTENT.content.filter(
    (item) => item.label === '음악중심',
  );

  return (
    <div className="oneclick-sms">
      <h3 className="oneclick-sms-title">문자신청/투표</h3>
      <div className="oneclick-sms-content">
        <h4>라디오 신청용</h4>
        <div className="sms-list">
          {smsRadioList.map((item) => (
            <Button
              size="lg"
              color="dark"
              href={item.links?.[0].link}
              key={item.label}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <h4>음악방송 실시간 투표용</h4>
        <div className="sms-list">
          <Button
            size="lg"
            color="dark"
            href={smsMusicLCore[0].links?.[0].link}
          >
            {smsMusicLCore[0].label}
          </Button>
        </div>
      </div>
    </div>
  );
}
export default OneClickSMS;

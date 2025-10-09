import type { QnaProps } from '@/types/qna';

import * as TITLE from './title.constant';

export const QNA_CONTENT: QnaProps = {
  label: TITLE.QNA,
  uniqueId: 'qna',
  list: [
    {
      title: '스밍(스트리밍)',
      id: 'streaming',
      content: [
        {
          title: '스밍은 왜 하나요?',
          body: '<p>스트리밍 횟수는 각 음원사이트의 실시간·일간·연간 차트와 음악방송, 시상식 점수에 모두 반영돼요.<br /> <span class="-b">음원차트 순위 유지</span>와 <span class="fc-pointRed -b">음악방송 및 연말 시상식 수상에 꼭</span> 필요합니다.</p>',
        },
        {
          title: '스밍은 어디서 하나요?',
          body: '<p>멜론, 지니, 플로, 벅스, 바이브, 스포티파이 등 음원사이트에서 가능하지만, <span class="fc-pointRed -b">멜론을 우선</span>으로 스밍해주실 것을 권장합니다.</p><ul class="bullet-list"><li class="list">음악방송에는 동등하게 반영되나(엠카는 스포티파이 비중이 높습니다)</li><li class="list"><span class="-b">멜론은 자체 시상식(멜론뮤직어워드)</span>을 운영하므로 멜론 우선 스밍을 권장합니다. </li></ul>',
        },
        {
          title: '스밍리스트는 어디서 확인하나요? 꼭 리스트대로 들어야 하나요?',
          body: '<p><span class="-b">음총팀 X계정·웹사이트에 공지되는 권장 스밍리스트</span>를 확인해주세요. <span class="-b">리스트대로 들어주셔야</span> 음원차트·써클차트·음방 순위·시상식 점수에 <span class="-b">최대 효율로 반영</span>됩니다.<br /> 스밍리스트대로 재생하기 <span class="-b">어렵다면</span>, 한 시간에 한 번 또는 <span class="-b">하루 한 번만 들어주셔도</span> 큰 도움이 됩니다.</p>',
        },
        {
          title: '뮤직웨이브(뮤웨)가 뭐예요?',
          body: '<p>멜론 앱과 웹사이트에서 제공하는 채팅 + 플레이리스트 기능입니다. <span class="-b">종종 라이즈가 채팅하러 오는 그 곳</span>이 바로 뮤직웨이브입니다. 멜론 이용권이 있는 브리즈가 뮤웨에 입장해 있기만 해도 앱으로 스밍하는 것과 동일한 효과가 있습니다.</p>',
        },
        {
          title: '공식 뮤웨와 음총 뮤웨 차이는 무엇인가요?',
          body: '<p>공식 뮤웨는 멜론이 제공하는 기본방, <span class="-b">음총 뮤웨는 음총팀이 운영하는 최적화 스밍방</span>입니다. 멜론 <span class="fc-pointRed -b">이용권만 있으면</span> 복잡한 설정 없이 <span class="fc-pointRed -b">입장만으로 자동 스밍 효과</span>를 얻을 수 있어요. 재생목록이 같다면 공식 뮤웨와 음총 뮤웨 모두 동일하게 차트에 반영되니 편한 곳에 계시면 됩니다. 만약 리스트가 다르다면 권장 스밍리스트대로 재생되는 음총팀 뮤웨 입장을 권장합니다.</p>',
        },
        {
          title: '뮤웨 창 꺼도 스밍되나요? 화면 켜놔야 하나요?',
          body: '<p>네. <span class="-b">멜론앱</span>을 <span class="fc-pointRed -b">종료하지만 않는다면</span> <span class="-b">백그라운드에서도 재생</span>됩니다. 화면을 꺼두시거나 홈버튼을 통해 앱을 내려두시거나 뮤직웨이브 내 화살표를 통해 뮤웨 창을 내려두셔도 스밍됩니다.</p>',
        },
        {
          title: '뮤웨도 설정이 필요한가요?',
          body: '<p>아니요. <span class="fc-pointRed -b">음량 2 이상(음소거 금지)</span> 외에는 추가 설정이 필요 없습니다. 댓글 참여 여부도 음원차트 순위에는 영향이 없으니 편하게 입장해 계시면 됩니다.</p>',
        },
        {
          title: '멜론 앱 스밍과 뮤웨, 차이가 뭔가요?',
          body: '<p><span class="-b f-underline">차트 반영은 동일</span>합니다.</p><p>뮤웨는</p><ul class="bullet-list"><li class="list"><span class="-b">설정 없이 입장만 해도 스밍</span>이 되고</li><li class="list">덜 끊기며</li><li class="list">참여 <span class="-b">인원수를 확인하고 채팅으로 서로 독려</span>할 수 있는 장점이 있습니다.</li></ul>',
        },
        {
          title:
            '한 곡만 반복해도 되나요? 원래 듣던 재생목록이랑 섞어 들어도 되나요?',
          body: '<p>한 곡만 반복하거나 재생목록을 섞어 들으면 차트 반영 <span class="fc-pointRed -b">효율이 크게 떨어집니다.</span></p><ul class="bullet-list"><li class="list">한 곡 반복 시 : 아무리 많이 들어도 시간당 1회(탑백), 하루 1회(일간)만 차트에 반영</li><li class="list">재생목록 섞기 시 : 스밍리스트에 없는 곡들이 들어가면서 반영률 하락</li></ul><p>가장 효율적인 차트 반영을 위해 스밍리스트대로 재생해주세요.</p><p>어려울 경우 최소한 한 시간에 한 번(탑백), 하루 한 번(일간)이라도 재생해 주세요.</p>',
        },
        {
          title: '소리를 꺼도 되나요?',
          body: '<p>음량 0은 집계 안 될 수 있으니 <span class="fc-pointRed -b">최소 2 이상 유지</span><span class="-b">해주세요.</span> <span class="-b">이어폰을 연결</span>해두시거나, 안드로이드의 경우 <span class="-b">사운드어시스턴트 앱 - 개별앱 음량 조절(5% 이상 권장)</span>을 통해 소리가 들리지 않도록 하시는 방법을 추천드립니다.</p>',
        },
        {
          title: '재생바를 건드리거나 중간에 멈췄어요.',
          body: '<p>멈춘 곡은 스킵하고 <span class="-b">다음 곡부터 재생</span>해 주세요.</p>',
        },
        {
          title: '멜론 이용권 있어야 하나요? 어떤 이용권이든 되나요?',
          body: '<p>네. 스트리밍 또는 다운로드 + 스트리밍 <span class="-b">이용권이 필요</span>하며 종류는 상관없습니다.</p>',
        },
        {
          title: '기감, 지듣계가 뭔가요? 그대로 두어도 되나요?',
          body: '<p>멜론 앱에서 자동 스밍 방지를 위해 만든 확인 팝업입니다. 실제로 노래를 듣고 있는지 주기적으로(보통 4~5시간마다 또는 랜덤) 확인합니다. 팝업이 뜨면 스밍이 중단되고, 확인 후에야 다시 재생됩니다.</p><ul class="bullet-list"><li class="list">기감: 기계적 스밍이 감지되었다는 알림 → 보안코드를 입력하면 재생 재개</li><li class="list">지듣계: “지금 듣고계신 음악을 계속 재생하시겠습니까?” 알람 → 예(확인) 클릭하면 재생 재개</li></ul><p>⚠️ 팝업이 떴는데 <span class="-b">처리하지 않으면 스밍이 계속 끊긴 상태</span>로 유지되니, 주기적으로 스밍이 끊기지 않았는지 <span class="-b">확인해주세요.</span></p>',
        },
      ],
    },
    {
      title: '스테이션헤드',
      id: 'stationHead',
      content: [
        {
          title: '스테이션헤드가 뭐예요?',
          body: '<p><span class="-b">스포티파이 또는 애플뮤직</span> 이용권이 있는 브리즈가 스테이션헤드를 연동해서 멜론 <span class="-b">뮤직웨이브처럼 스밍할 수 있는 앱</span> 입니다.</p>',
        },
        {
          title: '스테이션헤드를 왜 하는 거에요?',
          body: '<p>스테이션헤드로 스포티파이, 애플뮤직을 누락 없이 스밍이 가능하고, 스포티파이와 애플뮤직은 <span class="-b">써클차트(더쇼, 엠카, 음중, 인가)에 반영</span>됩니다.</p>',
        },
        {
          title: '스테이션헤드는 어떻게 하는 거에요?',
          body: '<p>스테이션헤드 앱 설치 후 실행 > 스포티파이 또는 애플뮤직 연동<span class="-b">(<span class="f-underline">이용권 필수</span>)</span> > <span class="-b fc-pointRed">BRIIZE 채널 또는 riizestreamjp 채널 입장</span></p>',
        },
        {
          title: '스테이션헤드는 소리 꺼도 되나요?',
          body: '<p>음량이 0이면 집계가 되지 않습니다. <span class="fc-pointRed -b">음량은 50% 이상</span>으로 유지해주세요 (사운드 어시스턴트도 50% 설정)</p>',
        },
        {
          title: '스테이션헤드 채널에 입장했는데 음악이 안 나와요',
          body: '<p>지난 스테이션 방송을 다시 들어주세요. <span class="-b">다시 듣기도 스트리밍 반영</span>됩니다.</p><br /><p>* 스테이션헤드 채널방 > 상단DJ 프로필 클릭 > 우측 상단 ••• > Go to profile > 아래로 스크롤 > Recorded shows > 지난 방송 다시듣기</p>',
        },
      ],
    },
    {
      title: '음원 다운로드',
      id: 'musicDownload',
      content: [
        {
          title: '음원 다운로드는 왜 하나요?',
          body: '<p>다운로드는 <span class="-b">차트 반영과 시상식 점수에 큰 비중</span>을 차지합니다. <br /> 특히 멜론차트는 <span class="fc-pointRed -b">다운로드 60%</span> + 스밍 40% 비율로 반영되므로, 음원차트 진입과 시상식 점수에 다운로드가 매우 중요합니다.</p>',
        },
        {
          title: '음원 결제만 하면 되나요? 다운로드는 생략해도 되나요?',
          body: '<p>아니요. 결제 후 실제 <span class="-b">파일까지 다운로드해야 차트에 반영</span>됩니다. 반드시 다운로드 완료까지 확인해주세요.</p>',
        },
        {
          title: '다운 후 파일은 꼭 삭제해야 하나요?',
          body: '<p>네. <span class="-b fc-pointRed">다운로드한 기기에서 스밍할 경우 반드시 삭제</span>해야 합니다.</p><p>다운로드 파일로 재생되면 차트에 반영되지 않으니, 파일 재생이 되지 않도록 삭제가 필요합니다.</p><br /><p>✅ 예외: 다운로드 기기와 스밍 기기가 다를 경우(예: PC로 다운, 휴대폰으로 스밍) 필수는 아니지만, 안전하게 스밍하려면 다운 완료 후 삭제를 권장합니다.</p>',
        },
        {
          title: '음원 구매·다운로드 내역 확인 & 파일 삭제 방법은?',
          body: '<ul class="bullet-list"><li class="list">멜론 앱 구매 내역 : 하단 4번째 아이콘(음악서랍) → 구매목록 → 곡/FLAC</li><li class="list">멜론 앱 다운로드 내역 : 하단 4번째 아이콘(음악서랍) → 다운로드 → 저장한 콘텐츠 → 곡/FLAC</li><li class="list">파일 삭제 : 다운로드 내역에서 개별 선택 후 삭제</li><li class="list">PC로 다운받은 경우 : 저장된 폴더에서 직접 파일 삭제</li><li class="list">지니/기타 음원앱 : 음총팀 가이드·화면녹화 안내 참조</li></ul>',
        },
        {
          title: 'PC에서 다운받고 모바일에서 스밍해도 되나요?',
          body: '<p>네. 문제없습니다.</p>',
        },
        {
          title: '개별곡, FLAC 16bit, FLAC 24bit 차이가 있나요?',
          body: '<p>음질과 가격 차이만 있고, 차트 반영은 아래와 같습니다.</p><ul class="bullet-list"><li class="list">멜론·벅스: 개별곡 1회 + FLAC(16bit 또는 24bit 중 1회) 반영 → <span class="-b fc-pointRed">개별곡 + FLAC 16bit 각 1회 다운로드 권장</span></li><li class="list">지니 : 개별곡과 FLAC 중 한 번만 반영 → <span class="-b fc-pointRed">가장 저렴한 개별곡 다운로드만 권장</span></li></ul>',
        },
        {
          title: 'MP3 다운로드 이용권으로 받아도 되나요?',
          body: '<p>가능합니다. 다만 개별곡과 MP3는 둘 중 하나만 반영되므로, 중복 다운로드는 피해주세요.</p>',
        },
      ],
    },
    {
      title: '투표',
      id: 'vote',
      content: [
        {
          title: '재화는 뭐예요? 꼭 모아야 하나요?',
          body: '<p>재화 = <span class="-b">투표용 하트·코인·포인트.</span> <br /> 많이 모을수록 투표량이 늘어나니 최대한 모아주세요.</p>',
        },
        {
          title: '재화는 매일 써야 하나요?',
          body: '<p>일부 투표는 매일 소진, 일부는 마감 직전 몰아쓰기 전략이 있어요.</p><p><span class="-b">음총팀 공지를 따라주세요.</span></p>',
        },
      ],
    },
  ],
};

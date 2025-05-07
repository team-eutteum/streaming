interface TodoListContentProps {
  id: string;
  cntn: string;
  checked: boolean;
  url?: string;
}

interface TodoListProps {
  updateDate: string;
  version: string;
  content: Array<TodoListContentProps>;
}

export const TODOLIST_CONTENT: TodoListProps = {
  updateDate: '2025.05.07',
  version: '4', // 수정될 때마다 버전 변경 해줘서 세션에서 변경 사항 감지
  content: [
    {
      id: 'todoList0',
      cntn: '브리즈 Rise & Realize 총공 연습 숙지',
      checked: false,
      url: 'https://x.com/RIIZE_STREAM/status/1918994533154697565',
    },
    {
      id: 'todoList1',
      cntn: '음총팀 계정 팔로우 / 알림 설정 / 주변 브리즈에게 알리기',
      checked: false,
      url: 'https://x.com/RIIZE_STREAM',
    },
    {
      id: 'todoList2',
      cntn: '멜론 / 지니 / 벅스 아이디 생성하여 음총팀에 보내기',
      checked: false,
      url: '/guide/id',
    },
    {
      id: 'todoList3',
      cntn: '음악방송 대비 재화 모으기',
      checked: false,
      url: '/vote/collect',
    },
    {
      id: 'todoList4',
      cntn: 'MV 스트리밍 하기',
      checked: false,
      url: 'https://youtu.be/vmL-XgxwQZU?si=U38cNrhJT6DsdeLq',
    },
  ],
};

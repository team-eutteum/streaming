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
  updateDate: '2025.05.19',
  version: '5', // 수정될 때마다 버전 변경 해줘서 세션에서 변경 사항 감지
  content: [
    {
      id: 'todoList0',
      cntn: '멜론,지니,벅스,바이브 6시 개별곡 다운로드',
      checked: false,
    },
    {
      id: 'todoList1',
      cntn: '멜론,지니,벅스,바이브 8시 FLAC 다운로드',
      checked: false,
    },
    {
      id: 'todoList2',
      cntn: 'Fly Up MV 스트리밍 하기',
      checked: false,
      url: 'https://youtu.be/vLUtHODdLzk?si=0UFgyDChm3Rx9aCd',
    },
    {
      id: 'todoList3',
      cntn: '음악방송 대비 재화 모으기',
      checked: false,
      url: '/vote/collect',
    },
    {
      id: 'todoList4',
      cntn: '음총팀 계정 팔로우 / 알림 설정 / 주변 브리즈에게 알리기',
      checked: false,
      url: 'https://x.com/RIIZE_STREAM',
    },
  ],
};

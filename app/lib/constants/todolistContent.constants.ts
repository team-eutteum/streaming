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
  updateDate: '2025.11.24',
  version: '7', // 수정될 때마다 버전 변경 해줘서 세션에서 변경 사항 감지
  content: [
    {
      id: 'todoList0',
      cntn: '하루 1번 Fame 감상 🪽',
      checked: false,
    },
    {
      id: 'todoList1',
      cntn: 'Fame MV 스트리밍 하기',
      checked: false,
      url: 'https://youtu.be/TVqEwvbZP30?si=g-13bDX6OtieEPBr',
    },
    {
      id: 'todoList2',
      cntn: '음총팀 계정 팔로우 / 알림 설정 / 주변 브리즈에게 알리기',
      checked: false,
      url: 'https://x.com/RIIZE_STREAM',
    },
  ],
};

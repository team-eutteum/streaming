interface TodoListContentProps {
  id: string;
  cntn: string;
  checked: boolean;
}

interface TodoListProps {
  updateDate: string;
  content: Array<TodoListContentProps>;
}

export const TODOLIST_CONTENT: TodoListProps = {
  updateDate: '2025.04.14',
  content: [
    {
      id: 'todoList1',
      cntn: '음총팀 계정 팔로우 / 알림 설정 / 주변 브리즈에게 알리기',
      checked: false,
    },
    {
      id: 'todoList2',
      cntn: '멜론 / 지니 / 벅스 아이디 생성하여 음총팀에 보내기',
      checked: false,
    },
    { id: 'todoList3', cntn: '음총팀 모금 참여하기', checked: false },
    { id: 'todoList4', cntn: '음악방송 대비 재화 모으기', checked: false },
  ],
};

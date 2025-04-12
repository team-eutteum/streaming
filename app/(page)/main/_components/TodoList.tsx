'use client';

import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

interface TodoListProps {
  id: string;
  cntn: string;
  checked: boolean;
}

const initialTodos = CONST.TODOLIST_CONTENT.TODOLIST_CONTENT;

function TodoList() {
  const [todoList, setTodoList] = useState<TodoListProps[] | null>(null);

  useEffect(() => {
    const storedTodos = sessionStorage.getItem('todoList');
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    } else {
      setTodoList(initialTodos);
    }
  }, []);

  useEffect(() => {
    if (todoList) {
      sessionStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList]);

  const toggleChecked = (id: string) => {
    if (!todoList) return;
    setTodoList((prevList) =>
      prevList!.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  // 서버 렌더링 중엔 아무것도 렌더링하지 않음 (Hydration 오류 방지)
  if (!todoList) return null;

  return (
    <section className="sc-todolist">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label={'브리즈가 할 일'} />
        </div>
        <ul className="todolist-wrap">
          {todoList.map((list) => (
            <li className="list" key={list.id}>
              <div className="input-wrap">
                <input
                  type="checkbox"
                  name={list.id}
                  id={list.id}
                  checked={list.checked}
                  onChange={() => toggleChecked(list.id)}
                />
                <div className="checkbox">{list.checked && <CheckIcon />}</div>
                <label className="f-bd2" htmlFor={list.id}>
                  {list.cntn}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;

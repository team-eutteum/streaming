'use client';

import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

import { PageTitle } from '@/components';
import { CONST } from '@/lib/constants';

interface TodoListProps {
  id: string;
  cntn: string;
  checked: boolean;
  url?: string;
}

const initialTodos = CONST.TODOLIST_CONTENT.TODOLIST_CONTENT.content;
const CURRENT_VERSION = CONST.TODOLIST_CONTENT.TODOLIST_CONTENT.version;

function TodoList() {
  const [todoList, setTodoList] = useState<TodoListProps[] | null>(null);

  useEffect(() => {
    const storedTodos = sessionStorage.getItem('todoList');
    const storedVersion = sessionStorage.getItem('todoListVersion');

    if (storedTodos && storedVersion === CURRENT_VERSION) {
      setTodoList(JSON.parse(storedTodos));
    } else {
      setTodoList(initialTodos);
      sessionStorage.setItem('todoList', JSON.stringify(initialTodos));
      sessionStorage.setItem('todoListVersion', CURRENT_VERSION);
    }
  }, []);

  useEffect(() => {
    if (todoList) {
      sessionStorage.setItem('todoList', JSON.stringify(todoList));
      sessionStorage.setItem('todoListVersion', CURRENT_VERSION);
    }
  }, [todoList]);

  const toggleChecked = (id: string, url?: string) => {
    if (!todoList) return;
    window.open(url, '_blank');
    setTodoList((prevList) =>
      prevList!.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  if (!todoList) return null;

  return (
    <section className="sc-todolist">
      <div className="inner">
        <div className="tit-area">
          <PageTitle label={'브리즈가 할 일'} />
        </div>
        <ul className="todolist-wrap">
          {todoList.map((list) => {
            //console.log(list, 'list');

            return (
              <li className="list" key={list.id}>
                <div className="input-wrap">
                  <input
                    type="checkbox"
                    name={list.id}
                    id={list.id}
                    checked={list.checked}
                    onChange={() => toggleChecked(list.id, list.url)}
                  />
                  <div className="checkbox">
                    {list.checked && <CheckIcon />}
                  </div>
                  <label className="f-bd2" htmlFor={list.id}>
                    {list.cntn}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;

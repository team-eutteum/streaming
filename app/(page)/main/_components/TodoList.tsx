function TodoList() {
  return (
    <div className="inner">
      <h2 className="tit">📌 브리즈가 할 일</h2>
      <ul className="todolist-wrap">
        <li className="list">
          <div className="input-wrap">
            <input type="checkbox" name="" id="todolist1" />
            <label htmlFor="todolist1">브리즈가 할 일 1</label>
          </div>
        </li>
        <li className="list">
          <div className="input-wrap">
            <input type="checkbox" name="" id="todolist1" />
            <label htmlFor="todolist1">브리즈가 할 일 1</label>
          </div>
        </li>
        <li className="list">
          <div className="input-wrap">
            <input type="checkbox" name="" id="todolist1" />
            <label htmlFor="todolist1">브리즈가 할 일 1</label>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default TodoList;

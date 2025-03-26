import CurrentRank from './_components/CurrentRank';
import OneClick from './_components/OneClick';
import TodoList from './_components/TodoList';

function MainPage() {
  return (
    <main>
      <section className="sc-rank">
        <CurrentRank />
      </section>
      <section className="sc-oneclick">
        <OneClick />
      </section>
      <section className="sc-todolist">
        <TodoList />
      </section>
    </main>
  );
}

export default MainPage;

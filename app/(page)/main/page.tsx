import Banner from './_components/Banner';
import CurrentChart from './_components/CurrentChart';
import OneClick from './_components/OneClick';
import TodoList from './_components/TodoList';

function MainPage() {
  return (
    <main>
      <Banner />
      <CurrentChart />
      <OneClick />
      <TodoList />
    </main>
  );
}

export default MainPage;

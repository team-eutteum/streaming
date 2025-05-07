import CurrentChart from './_components/CurrentChart';
import OneClick from './_components/OneClick';
import SwiperBanner from './_components/SwiperBanner';
import TodoList from './_components/TodoList';

function MainPage() {
  return (
    <main>
      <SwiperBanner />
      <CurrentChart />
      <OneClick />
      <TodoList />
    </main>
  );
}

export default MainPage;

import Header from './components/Header/index';
import UserCard from './components/UserCard/index';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <UserCard />
      </main>
      <footer className="text-center text-md text-gray-200 mt-6">&copy;Rafael Santiago</footer>
    </>
  );
}

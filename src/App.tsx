import Header from './components/Header/index';
import UserCard from './components/UserCard/index';

export default function App() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center gap-2">
        <UserCard />
      </main>
      <footer className="text-center text-md text-gray-200 mt-6">&copy;Rafael Santiago</footer>
    </>
  );
}

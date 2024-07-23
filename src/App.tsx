import Header from './components/Header';
import UserCard from './components/UserCard';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <UserCard />
      </main>
      <footer className='text-center text-md text-gray-200 mt-6'>&copy;Rafael Santiago</footer>
    </>
  );
}

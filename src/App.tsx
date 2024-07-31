import { useState } from 'react';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar';
import UserCard from './components/UserCard/index';
import FavoritedUsersProvider from './context/FavoritedUsersProvider';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <FavoritedUsersProvider>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="flex items-center justify-center gap-2">
          <UserCard />
        </main>
      </FavoritedUsersProvider>
      <footer className="text-center text-md text-gray-200 mt-6">&copy;Rafael Santiago</footer>
    </>
  );
}

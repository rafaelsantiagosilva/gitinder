import { useState } from 'react';
import Header from './components/Header/index';
import UserCard from './components/UserCard/index';
import Sidebar from './components/Sidebar';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <main className="flex items-center justify-center gap-2">
        <UserCard />
      </main>
      <footer className="text-center text-md text-gray-200 mt-6">&copy;Rafael Santiago</footer>
    </>
  );
}

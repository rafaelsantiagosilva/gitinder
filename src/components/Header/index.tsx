import { RiUserHeartLine } from 'react-icons/ri';

interface HeaderProps {
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export default function Header({setIsSidebarOpen}: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-gray-950 text-gray-200 py-4 px-6 shadow-lg">
      <a className="flex items-center" href="#">
        <img className="size-11" src="/favicon.ico" alt="Octocat in a white flame (Tinder logo)" />
        <h1 className="hidden text-2xl font-medium sm:inline-block">GiTinder</h1>
      </a>
      <nav className="flex items-center gap-6">
        <a
          className="text-gray-300 hover:text-gray-200 hover:underline"
          href="https://docs.github.com/pt/rest?apiVersion=2022-11-28"
          target="blank"
        >
          Github API
        </a>
        <button onClick={() => setIsSidebarOpen(true)} className="border rounded-full p-2 hover:bg-gray-200 hover:text-gray-800 transition-colors">
          <RiUserHeartLine className="text-lg" />
        </button>
      </nav>
    </header>
  );
}

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-950 text-gray-200 py-4 px-6 shadow-lg">
      <a className="flex items-center" href="#">
        <img className="size-11" src="/favicon.ico" alt="Octocat in a white flame (Tinder logo)" />
        <h1 className="text-2xl font-medium">Gitinder</h1>
      </a>
      <nav className="flex gap-6">
        <a className="text-gray-300 hover:text-gray-200 hover:underline" href="#">
          Github API
        </a>
        <a className="text-gray-300 hover:text-gray-200 hover:underline" href="#">
          Vite
        </a>
        <a className="text-gray-300 hover:text-gray-200 hover:underline" href="#">
          Curtidas
        </a>
      </nav>
    </header>
  );
}

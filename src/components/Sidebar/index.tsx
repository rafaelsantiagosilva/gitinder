interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  return (
    <menu
      className={`bg-gray-800 w-full max-w-96 h-svh fixed top-0 right-0 transition-all ${!isSidebarOpen && 'translate-x-[110%]'}`}
    >
      <button onClick={() => setIsSidebarOpen(false)} className="text-lg text-gray-200">
        X
      </button>
    </menu>
  );
}

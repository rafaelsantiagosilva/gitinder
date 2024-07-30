import { RiCloseLargeFill } from "react-icons/ri";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  return (
    <menu
      className={`bg-gray-800 shadow-sm p-6 w-full max-w-96 h-svh fixed top-0 right-0 transition-all ${!isSidebarOpen && 'translate-x-[110%]'}`}
    >
      <div className="flex justify-end">
        <button onClick={() => setIsSidebarOpen(false)} className="pr-4 text-gray-200">
          <RiCloseLargeFill className="text-2xl flex-1" />
        </button>
      </div>
    </menu>
  );
}

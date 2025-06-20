import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Admin() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className="h-screen w-screen flex overflow-hidden relative">
      
      {isSidebarOpen ? (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      ) : null}

      
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      
      {isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-[260px] z-50 md:hidden text-white text-3xl bg-black/60 px-3 py-1 font-semibold rounded"
        >
          ×
        </button>
      )}

      
      <div className="flex flex-col flex-1 overflow-hidden z-0">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;

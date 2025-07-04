import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../src/assets/images/logo.png'

function Sidebar({ isSidebarOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed md:static top-0 left-0 z-50 bg-blue-500 text-white h-screen w-64 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="h-full p-4 flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          draggable="false"
          className="w-20 rounded-full"
        />

        <ul className="space-y-2 font-medium mt-8 w-full">
          <li>
            <Link
              to="/admin/dashboard"
              onClick={() => toggleSidebar()}
              className={`flex items-center p-2 rounded-lg w-full ${
                location.pathname.includes('/admin/dashboard')
                  ? 'bg-blue-700'
                  : 'hover:bg-blue-600'
              } md:hover:bg-blue-600`}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin/products"
              onClick={() => toggleSidebar()}
              className={`flex items-center p-2 rounded-lg w-full ${
                location.pathname.includes('/admin/products') ||
                location.pathname.includes('/admin/product/') ||
                location.pathname.includes('/admin/edit/') ||
                location.pathname.includes('/admin/create-product')
                  ? 'bg-blue-700'
                  : 'hover:bg-blue-600'
              } md:hover:bg-blue-600`}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="ml-3">Products</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

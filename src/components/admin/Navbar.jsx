import React from 'react'

function Navbar({ toggleSidebar }) {
    return (
        <header className="border-b border-gray-300 px-6 py-4 tracking-wide relative z-40 shadow-md">
            <div className="flex items-center justify-between">

                {/* Left Side - Menu Button */}
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
                        <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                {/* Center - Search Bar */}
                <div className="flex-grow max-w-md mx-4">
                    <div className="bg-gray-100 flex items-center px-4 rounded-full h-10 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" className="w-4 h-4 fill-gray-500 mr-3">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803z" />
                        </svg>
                        <input type="text" placeholder="Search..." className="w-full outline-none bg-transparent text-slate-900 text-sm" />
                    </div>
                </div>

                {/* Right Side Icons */}
                <div className="flex items-center space-x-6">

                    {/* Heart */}
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                            className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block" viewBox="0 0 64 64">
                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                        </svg>
                        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
                    </span>

                    {/* Cart */}
                    <span className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                            className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block" viewBox="0 0 512 512">
                            <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" />
                        </svg>
                        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">4</span>
                    </span>

                    {/* Bell */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer fill-[#000] hover:fill-blue-700 inline-block w-10"
                        viewBox="0 0 512 512"><path d="M256 73.825a182.175 182.175 0 1 0 182.18 182.18A182.177 182.177 0 0 0 256 73.825zm0 71.833a55.05 55.05 0 1 1-55.054 55.046A55.046 55.046 0 0 1 256 145.658zm.52 208.723h-80.852c0-54.255 29.522-73.573 48.885-90.906a65.68 65.68 0 0 0 62.885 0c19.363 17.333 48.885 36.651 48.885 90.906z" data-name="Profile" /></svg>
                </div>
            </div>
        </header>
    )
}

export default Navbar


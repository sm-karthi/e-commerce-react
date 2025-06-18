import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Admin() {
    return (


        <div className="h-screen w-screen flex overflow-hidden">

            <Sidebar />


            <div className="flex flex-col flex-1 overflow-hidden">

                <Navbar />

                <div className='flex-1 overflow-auto bg-gray-50'>

                    <Outlet/>

                </div>

            </div>
        </div>

    )
}

export default Admin

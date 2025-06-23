import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    let [product, setProduct] = useState([]);

    let getData = async () => {
        try {
            let response = await axios.get("https://6850f0628612b47a2c07fce0.mockapi.io/products");
            setProduct(response.data);
        } catch (error) {
            alert("Something went wrong");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* First Card */}
                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">2</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">Users</div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600">⋮</button>
                            {/* Dropdown menu can be implemented here */}
                        </div>
                    </div>
                    <p className="text-[#f84525] font-medium text-sm hover:text-red-800">View</p>
                </div>

                {/* Second Card */}

                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-6">
                        <div>
                            <div className="text-2xl font-semibold mb-1">{product.length}</div>
                            <div className="text-sm font-medium text-gray-400">Products</div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600">⋮</button>
                        </div>
                    </div>
                    <p className="text-[#f84525] font-medium text-sm hover:text-red-800">View</p>
                </div>


                {/* Third Card */}

                <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="flex items-center mb-1">
                                <div className="text-2xl font-semibold">100</div>
                                <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
                            </div>
                            <div className="text-sm font-medium text-gray-400">Companies</div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600">⋮</button>
                        </div>
                    </div>
                    <p className="text-[#f84525] font-medium text-sm hover:text-red-800">View</p>
                </div>



            </div>

            {/* Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Users</h3>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 py-3 text-xs uppercase font-semibold text-left">Role</th>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 py-3 text-xs uppercase font-semibold text-left">Amount</th>
                                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 py-3 text-xs uppercase font-semibold text-left">Progress</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700 dark:text-gray-100">
                                        <td className="p-4 text-left">Administrator</td>
                                        <td className="p-4">1</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">70%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={{ width: '70%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="text-gray-700 dark:text-gray-100">
                                        <td className="p-4 text-left">User</td>
                                        <td className="p-4">6</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">40%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="text-gray-700 dark:text-gray-100">
                                        <td className="p-4 text-left">User</td>
                                        <td className="p-4">5</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">45%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                                        <div style={{ width: '45%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr className="text-gray-700 dark:text-gray-100">
                                        <td className="p-4 text-left">User</td>
                                        <td className="p-4">4</td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">60%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                        <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Dashboard;

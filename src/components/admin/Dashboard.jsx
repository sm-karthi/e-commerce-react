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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-10">

                {product.map((item) => (
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-3">

                        <img src={item.imageUrl} alt={item.title} className="w-full object-cover" draggable="false" />

                        <div className="space-y-2">

                            <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>

                            <p className="text-sm text-gray-500">{item.description.slice(0, 60)}...</p>

                            <div className="flex items-center justify-between mt-3">

                                <h3 className="text-lg font-bold text-green-600">₹{item.details[0].value}</h3>

                                <span className="bg-green-50 shadow-sm text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                                    Free Delivery
                                </span>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Dashboard;

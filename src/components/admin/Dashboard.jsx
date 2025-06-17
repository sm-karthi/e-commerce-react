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
        <div className='flex flex-wrap gap-5 p-6 items-center justify-center md:justify-start mt-10'>
            {
                product.map(item => (

                    <div className='w-60 p-4 shadow-lg rounded-lg border border-gray-300 bg-white'>
                        <img src={item.imageUrl} alt={item.title} draggable="false" className='w-full h-40' />
                        <h2 className='text-lg font-semibold mt-2 text-gray-600'>{item.title}</h2>
                        <p className='text-gray-600'>₹{item.price}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Dashboard;

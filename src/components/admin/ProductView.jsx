import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductView() {
  let { id } = useParams();
  let [product, setProduct] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState(0);

  let getProduct = async () => {
    try {
      let response = await axios.get(`https://6850f0628612b47a2c07fce0.mockapi.io/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='p-6 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 justify-center mt-10'>
      <div className='border border-gray-200 rounded-md shadow-xl p-3 bg-white md:w-88 w-full'>
        <img src={product.imageUrl} alt={product.title} draggable="false" className='rounded-md' />
      </div>

      <div className='space-y-3 md:w-[40%]'>
        <h1 className='font-bold text-3xl text-gray-600'>Product Details</h1>

        <h2 className='text-gray-600 text-xl font-bold'>{product.title}</h2>

        <h2 className='text-gray-600 font-semibold text-xl'>
          ₹{product.details && product.details[selectedIndex] ? product.details[selectedIndex].value : 0}
        </h2>


        <p className='text-gray-600 font-semibold text-lg'>{product.description}</p>

        <span className="bg-green-50 text-green-700 text-sm shadow-sm font-medium px-3 py-1 rounded-full">
          Free Delivery
        </span>

        <div className='flex flex-wrap gap-3 mt-5'>

          {product.details ? product.details.map((obj, index) => (
            <span

              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer px-3 py-1 rounded-full font-medium shadow-sm border 
                 ${selectedIndex === index
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-green-100 text-green-800 border-green-300'}`}>
              {`${obj.key} / ₹${obj.value}`}
            </span>
          )) : null}

        </div>
      </div>
    </div>
  );
}

export default ProductView;

import React, { useState } from 'react'

function ProductCreate() {

  let [rows, setRows] = useState([true]);

  let handleAddBtn = () => {
    setRows([...rows, true]);
  }

  let handleCloseBtn = (index) => {
    let updatedRow = [...rows];
    updatedRow.splice(index, 1);
    setRows(updatedRow)
  }

  return (
    <div className='p-6 py-10'>

      <div className="flex flex-col space-y-4 items-center mx-auto p-6 rounded-lg shadow-md bg-white md:w-fit">

        <h1 className='font-bold text-2xl text-gray-600'>Create Product</h1>

        <form className='space-y-4'>

          <div className='flex flex-col'>

            <label className='font-semibold text-lg text-gray-700'>Title:</label>

            <input type="text" name='title' className='md:w-lg mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500' />

            <span className='text-red-500'></span>

          </div>

          <div className='flex flex-col'>

            <label className='font-semibold text-lg text-gray-700'>Image URL:</label>

            <input type="text" name='title' className='md:w-lg mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500' />

            <span className='text-red-500'></span>

          </div>

          <div className="flex flex-col">

            <label className='font-semibold text-lg text-gray-700'>Description:</label>

            <textarea className='md:w-lg mt-1 border px-3 py-2 rounded h-22 focus:outline-none focus:border-blue-500'></textarea>

            <span className='text-red-500'></span>

          </div>

          <svg
            onClick={handleAddBtn}
            className="cursor-pointer w-[50px] h-[50px] fill-blue-500 hover:fill-blue-700 drop-shadow-lg transition duration-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
          >
            <g transform="scale(8.53333,8.53333)">
              <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z" />
            </g>
          </svg>


          {
            rows.map((row, index) => (

              <div className='flex relative flex-col md:flex-row space-y-3 md:space-y-0 justify-between'>

                <div className='flex flex-col'>

                  <label className='font-semibold text-lg text-gray-700'>Key:</label>

                  <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500' />

                  <span className='text-red-500'></span>

                </div>


                <div className='flex flex-col'>

                  <label className='font-semibold text-lg text-gray-700'>Value:</label>

                  <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500' />

                  <span className='text-red-500'></span>

                </div>

                <div className='flex flex-col'>

                  <label className='font-semibold text-lg text-gray-700'>Quantity:</label>

                  <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500' />

                  <span className='text-red-500'></span>

                </div>

                {
                  rows.length > 1 ? (
                    <button
                    type='button'
                    onClick={() => handleCloseBtn(index)}
                    className='absolute top-1 right-0 bg-red-500 rounded-full w-6 h-6 text-white hover:bg-red-700 font-bold cursor-pointer shadow-md'>X</button>
                  ) : null
                }

              </div>

            ))
          }


          <button className='bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md cursor-pointer'>Submit</button>

        </form>

      </div>

    </div>
  )
}

export default ProductCreate
import React from 'react'

function ProductCreate() {
  return (
    <div className='p-6 py-10'>

      <div className="flex flex-col space-y-4 items-center mx-auto p-6 rounded-lg shadow-md bg-white md:w-fit">

        <h1 className='font-bold text-2xl text-gray-600'>Create Product</h1>

        <form className='space-y-4'>

          <div className='flex flex-col'>

            <label className='font-semibold text-lg text-gray-700'>Title:</label>

            <input type="text" name='title' className='md:w-lg mt-1 border px-3 py-2 rounded' />

            <span className='text-red-500'></span>

          </div>

          <div className='flex flex-col'>

            <label className='font-semibold text-lg text-gray-700'>Image URL:</label>

            <input type="text" name='title' className='md:w-lg mt-1 border px-3 py-2 rounded' />

            <span className='text-red-500'></span>

          </div>

          <div className="flex flex-col">

            <label className='font-semibold text-lg text-gray-700'>Description:</label>

            <textarea className='md:w-lg mt-1 border px-3 py-2 rounded h-22'></textarea>

            <span className='text-red-500'></span>

          </div>

          <svg
            className='cursor-pointer'
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={50}
            height={50}
            viewBox="0,0,256,256"
          >
            <g
              fill="#305aeb"

            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM21,16h-5v5c0,0.553 -0.448,1 -1,1c-0.552,0 -1,-0.447 -1,-1v-5h-5c-0.552,0 -1,-0.447 -1,-1c0,-0.553 0.448,-1 1,-1h5v-5c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1v5h5c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z" />
              </g>
            </g>
          </svg>

          <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between'>

            <div className='flex flex-col'>

              <label className='font-semibold text-lg text-gray-700'>Key:</label>

              <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded' />

              <span className='text-red-500'></span>

            </div>


            <div className='flex flex-col'>

              <label className='font-semibold text-lg text-gray-700'>Value:</label>

              <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded' />

              <span className='text-red-500'></span>

            </div>

            <div className='flex flex-col'>

              <label className='font-semibold text-lg text-gray-700'>Quantity:</label>

              <input type="text" name='title' className='md:w-40 mt-1 border px-3 py-2 rounded' />

              <span className='text-red-500'></span>

            </div>

          </div>



        </form>

      </div>

    </div>
  )
}

export default ProductCreate
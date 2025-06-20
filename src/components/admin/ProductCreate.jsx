import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

function ProductCreate() {
  const [rows, setRows] = useState([{ key: "", value: "", quantity: "" }]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAddBtn = () => {
    setRows([...rows, { key: "", value: "", quantity: "" }]);
  };

  const handleCloseBtn = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      imageUrl: "",
      description: "",
      details: rows
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = "Please enter a title";
      } else if (values.title.length < 3) {
        errors.title = "Please enter a valid title";
      }

      if (!values.imageUrl) {
        errors.imageUrl = "Please enter an image URL";
      }

      if (!values.description) {
        errors.description = "Please enter a description";
      } else if (values.description.length < 10) {
        errors.description = "Description should be at least 10 characters";
      }

      const detailsErrors = values.details.map((item) => {
        const err = {};
        if (!item.key) err.key = "Key required";
        if (!item.value) err.value = "Value required";
        if (!item.quantity) err.quantity = "Quantity required";
        return err;
      });

      errors.details = detailsErrors;
      return errors;
    },
    onSubmit: (values) => {
      alert("Form submitted");
      console.log(values);
    }
  });

  useEffect(() => {
    formik.setFieldValue("details", rows);
  }, [rows]);

  const handleDetailChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  return (
    <div className='p-6 py-10'>
      <div className="flex flex-col space-y-4 items-center mx-auto p-6 rounded-lg shadow-md bg-white md:w-fit">
        <h1 className='font-bold text-2xl text-gray-600'>Create Product</h1>

        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmitted(true);
            formik.handleSubmit();
          }}
        >

          
          <div className='flex flex-col'>
            <label className='font-semibold text-lg text-gray-700'>Title:</label>
            <input
              type="text"
              name='title'
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='md:w-lg mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500'
            />
            {isSubmitted && formik.errors.title ? (
              <span className='text-red-500'>{formik.errors.title}</span>
            ) : null}
          </div>

          
          <div className='flex flex-col'>
            <label className='font-semibold text-lg text-gray-700'>Image URL:</label>
            <input
              type="text"
              name='imageUrl'
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='md:w-lg mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500'
            />
            {isSubmitted && formik.errors.imageUrl ? (
              <span className='text-red-500'>{formik.errors.imageUrl}</span>
            ) : null}
          </div>

          
          <div className="flex flex-col">
            <label className='font-semibold text-lg text-gray-700'>Description:</label>
            <textarea
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='md:w-lg mt-1 border px-3 py-2 rounded h-22 focus:outline-none focus:border-blue-500'
            ></textarea>
            {isSubmitted && formik.errors.description ? (
              <span className='text-red-500'>{formik.errors.description}</span>
            ) : null}
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

         
          {rows.map((row, index) => (
            <div key={index} className='flex relative flex-col md:flex-row space-y-3 md:space-y-0 justify-between'>
              <div className='flex flex-col'>
                <label className='font-semibold text-lg text-gray-700'>Key:</label>
                <input
                  type="text"
                  name='key'
                  value={row.key}
                  onChange={(e) => handleDetailChange(index, 'key', e.target.value)}
                  className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500'
                />
                {isSubmitted && formik.errors.details?.[index]?.key ? (
                  <span className='text-red-500'>{formik.errors.details[index].key}</span>
                ) : null}
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-lg text-gray-700'>Value:</label>
                <input
                  type="text"
                  name='value'
                  value={row.value}
                  onChange={(e) => handleDetailChange(index, 'value', e.target.value)}
                  className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500'
                />
                {isSubmitted && formik.errors.details?.[index]?.value ? (
                  <span className='text-red-500'>{formik.errors.details[index].value}</span>
                ) : null}
              </div>

              <div className='flex flex-col'>
                <label className='font-semibold text-lg text-gray-700'>Quantity:</label>
                <input
                  type="text"
                  name='quantity'
                  value={row.quantity}
                  onChange={(e) => handleDetailChange(index, 'quantity', e.target.value)}
                  className='md:w-40 mt-1 border px-3 py-2 rounded focus:outline-none focus:border-blue-500'
                />
                {isSubmitted && formik.errors.details?.[index]?.quantity ? (
                  <span className='text-red-500'>{formik.errors.details[index].quantity}</span>
                ) : null}
              </div>

              {rows.length > 1 && (
                <button
                  type='button'
                  onClick={() => handleCloseBtn(index)}
                  className='absolute top-1 right-0 bg-red-500 rounded-full w-6 h-6 text-white hover:bg-red-700 font-bold cursor-pointer shadow-md'
                >
                  X
                </button>
              )}
            </div>
          ))}

          
          <button
            type='submit'
            className='bg-blue-500 text-white px-3 py-1 rounded font-semibold hover:bg-blue-700 transition duration-150 shadow-md cursor-pointer'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductCreate;

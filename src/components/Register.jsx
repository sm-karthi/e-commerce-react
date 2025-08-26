import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import { config } from './../config';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    let navigation = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            let error = {};

            if (values.password !== values.confirmPassword) {
                error.confirmPassword = "Password do not match"
            }
            return error
        },
        onSubmit: async (values) => {
            try {
                console.log('Form Data:', values)
                await axios.post(`${config.api}/register`, values)
                navigation("/login")
            } catch (error) {
                alert("Something went wrong")
            }

        },
    })

    return (
        <div className='flex items-center bg-gray-50 justify-center h-screen p-6'>
            <div className='flex bg-white shadow-xl rounded-2xl w-full md:w-[65%] justify-center'>
                <form
                    onSubmit={formik.handleSubmit}
                    className='flex flex-col p-8 md:px-20 md:w-1/2 w-full items-center justify-center'
                >
                    <h1 className='font-bold text-2xl text-gray-700'>Register</h1>

                    {/* Name */}
                    <div className='flex flex-col space-y-2 w-full mt-6'>
                        <label className='font-bold text-gray-600'>Name</label>
                        <input
                            type='text'
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className='border-2 border-gray-400 rounded p-1 px-2 focus:outline-none'
                        />

                    </div>

                    {/* Email */}
                    <div className='flex flex-col space-y-2 w-full mt-4'>
                        <label className='font-bold text-gray-600'>Email</label>
                        <input
                            type='text'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className='border-2 border-gray-400 rounded p-1 px-2 focus:outline-none'
                        />

                    </div>

                    {/* Phone Number */}
                    <div className='flex flex-col space-y-2 w-full mt-4'>
                        <label className='font-bold text-gray-600'>Phone Number</label>
                        <input
                            type='text'
                            name='phoneNumber'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            className='border-2 border-gray-400 rounded p-1 px-2 focus:outline-none'
                        />

                    </div>

                    {/* Password */}
                    <div className='flex flex-col space-y-2 w-full mt-4'>
                        <label className='font-bold text-gray-600'>Password</label>
                        <input
                            type='password'
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className='border-2 border-gray-400 rounded p-1 px-2 focus:outline-none'
                        />

                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col space-y-2 w-full mt-4'>
                        <label className='font-bold text-gray-600'>Confirm Password</label>
                        <input
                            type='password'
                            name='confirmPassword'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            className='border-2 border-gray-400 rounded p-1 px-2 focus:outline-none'
                        />

                        <span className='text-red-500 text-sm'>{formik.errors.confirmPassword}</span>
                    </div>

                    <button
                        type='submit'
                        className='bg-blue-500 w-full mt-6 text-white py-1.5 rounded shadow-md 
                    font-semibold hover:bg-blue-600 transition duration-150 cursor-pointer'
                    >
                        Register
                    </button>

                    <Link to={"/login"} className='mt-2 text-blue-700'>Already have an account? Login</Link>

                </form>

                <div className='hidden md:block md:w-1/2'>
                    <img
                        src='https://img.freepik.com/premium-vector/content-development-concept_96055-3.jpg'
                        alt='image'
                        className='rounded-r-xl h-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Register

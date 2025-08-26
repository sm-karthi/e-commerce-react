import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { config } from '../config'

function Login() {

    let navigation = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
               let loginRes = await axios.post(`${config.api}/login`, values);
               console.log(loginRes.data)
               window.localStorage.setItem("myapp", loginRes.data.token)
               navigation("/user")
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
                    <h1 className='font-bold text-2xl text-gray-700'>Log In</h1>
                    <p className='text-sm font-semibold mt-1 text-gray-400'>
                        Welcome back! enter your details
                    </p>

                    {/* Email */}
                    <div className='flex flex-col space-y-2 w-full mt-6'>
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

                    <button
                        type='submit'
                        className='bg-blue-500 w-full mt-6 text-white py-1.5 rounded shadow-md 
            font-semibold hover:bg-blue-600 transition duration-150 cursor-pointer'
                    >
                        Login
                    </button>

                    <Link to={"/register"} className='mt-10 text-blue-700'>Create an account!</Link>

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

export default Login

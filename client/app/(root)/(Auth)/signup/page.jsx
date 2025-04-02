import Image from 'next/image'
import React from 'react'

import Signup_img from "@/public/Images/login-animate.gif";

function page() {
    return (
        <>
            <div className='flex min-h-screen bg-white'>
                <main className='flex-1 p-5 hidden lg:block bg-warning'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 flex justify-center items-center h-[90vh]'>
                                <Image
                                    src={Signup_img}
                                    priority={true}
                                    quality={100}
                                    sizes='(max-width : 80%) 100vw , (max-width:80%) 50vw , 33vw'
                                    alt='signup_img'
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <main className='flex-1 p-5 bg-blue-500 lg:rounded-l-[15%]'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 flex justify-center items-center h-[90vh]'>
                                <div className='w-[80%]'>
                                    <div className='grid grid-cols-12 gap-3'>
                                        <div className='col-span-12 text-center'>
                                            <span className='text-white text-4xl font-bold'>New User Registration</span>
                                        </div>
                                        <div className='col-span-6 text-center mt-3'>
                                            <input type="text" className='bg-white text-gray-500 font-normal p-4 rounded-[50px] w-full outline-none' placeholder='First Name' />
                                        </div>
                                        <div className='col-span-6 text-center mt-3'>
                                            <input type="text" className='bg-white text-gray-500 font-normal p-4 rounded-[50px] w-full outline-none' placeholder='Last Name' />
                                        </div>
                                        <div className='col-span-12 text-center mt-3'>
                                            <input type="email" className='bg-white text-gray-500 font-normal p-4 rounded-[50px] w-full outline-none' placeholder='Email Address' />
                                        </div>
                                        <div className='col-span-6 text-center mt-3'>
                                            <input type="tel" className='bg-white text-gray-500 font-normal p-4 rounded-[50px] w-full outline-none' placeholder='Mobile' />
                                        </div>
                                        <div className='col-span-6 text-center mt-3'>
                                            <input type="password" className='bg-white text-gray-500 font-normal p-4 rounded-[50px] w-full outline-none' placeholder='Password' />
                                        </div>
                                        <div className='col-span-12 text-center mt-5'>
                                            <button className='uppercase rounded-[50px] w-1/2 bg-gray-200 border hover:bg-gray-300 border-gray-500 text-black text-lg font-medium p-3 cursor-pointer transition-all hover:scale-105 duration-200'>
                                                Signup
                                            </button>
                                        </div>
                                        <div className='col-span-12 text-center mt-3'>
                                            <span>Already Have an Account <a href="/signin" className='underline'>Signin</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default page
import Image from 'next/image'
import React from 'react'

// resources
import login_img from "@/public/Images/login-animate.gif";

function page() {
    return (
        <>
            <div className='w-full h-screen bg-white flex'>
                <main className='flex-1 p-5 hidden lg:block bg-white'>
                    <div className='col-span-12'>
                        <div className='grid grid-cols-2'>
                            <div className='col-span-1 lg:col-span-2 flex justify-center items-center h-[90vh]'>
                                <Image src={login_img} priority={true} quality={100} sizes='(max-width:80%) 100vw, (max-width:80%) 50vw, 33vw' alt='login_img' />
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
                                            <span className='text-white text-4xl font-bold'>
                                                User Signin
                                            </span>
                                        </div>
                                        <div className='col-span-12 text-center mt-3'>
                                            <div className='col-span-12 text-center mt-3'>
                                                <input
                                                    type="text"
                                                    className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full'
                                                    placeholder='Username'
                                                />
                                            </div>
                                            <div className='col-span-12 text-center mt-3'>
                                                <input
                                                    type="password"
                                                    className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full'
                                                    placeholder='Password'
                                                />
                                            </div>
                                            <div className='col-span-12 w-[100%] grid grid-cols-12'>
                                                <div className='col-span-6 text-start mt-3 ml-3 inline-flex gap-2 items-center'>
                                                    <span className='text-white text-md font-light'>
                                                        Remember Me
                                                    </span>
                                                    <input type="checkbox" className='rounded-lg border border-none w-4 h-4' />
                                                </div>
                                                <div className='col-span-6 text-end justify-end mt-3 mr-3 inline-flex gap-2'>
                                                    <span className='text-white text-md font-light cursor-pointer underline'>
                                                        Forget Password
                                                    </span>
                                                </div>
                                                <div className='col-span-12 mt-5 flex justify-center'>
                                                    <button className='uppercase rounded-[50px] w-[50%] bg-gray-200 border hover:bg-gray-300 border-black text-lg font-medium p-3 text-black cursor-pointer'>
                                                        Signin
                                                    </button>
                                                </div>
                                                <div className='col-span-12 mt-5 flex justify-center'>
                                                    <span>Already have an Account <a href="#" className='underline'>Signup</a></span>
                                                </div>
                                            </div>
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
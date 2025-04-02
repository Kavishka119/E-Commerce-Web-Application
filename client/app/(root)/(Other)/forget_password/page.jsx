"use client";
import React, { useState } from 'react'

import fp_img from "@/public/Images/login-animate.gif";
import Image from 'next/image';

function page() {

    const [isNextClicked, setNextClick] = useState(false);


    const clickNext = () => {

        setNextClick(true);

        // send Verification Code.....

    };

    return (
        <>
            <div className='w-full h-screen bg-white flex'>
                <main className='flex-1 p-5 hidden lg:block bg-white'>
                    <div className='col-span-12 flex justify-center items-center h-[90vh]'>
                        <Image
                            src={fp_img}
                            priority={true}
                            quality={100}
                            sizes='(max-width : 80%) 100vw , (max-width:80%) 50vw , 33vw'
                            alt='forget_password_img'
                        />
                    </div>
                </main>
                {isNextClicked ? (
                    <>
                        <main className='flex-1 p-5 bg-blue-500 lg:rounded-l-[15%]'>
                            <div className='col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 flex justify-center items-center h-[90vh]'>
                                        <div className='w-[80%]'>
                                            <div className='grid-cols-12 grid gap-3'>
                                                <div className='col-span-12 text-center'>
                                                    <span className='text-white text-4xl font-bold'>Change Your Password</span>
                                                </div>
                                                <div className='col-span-12 mt-3'>
                                                    <input type="text" className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full outline-none' defaultValue={"example@gmail.com"} disabled />
                                                </div>
                                                <div className='col-span-12 mt-3'>
                                                    <input type="password"
                                                        className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full outline-none'
                                                        placeholder='New Password'
                                                    />
                                                </div>
                                                <div className='col-span-12 mt-3'>
                                                    <input type="password"
                                                        className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full outline-none'
                                                        placeholder='Re-Type New Password'
                                                    />
                                                </div>
                                                <div className='col-span-12 mt-3 gap-5 flex justify-center'>
                                                    <button
                                                        className='w-1/2 bg-gray-200 uppercase rounded-[50px] hover:bg-gray-300 border-gray-500 text-black text-lg font-medium p-3 cursor-pointer transition-all hover:scale-105 duration-200'
                                                        onClick={()=>setNextClick(false)}
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        className='w-1/2 bg-gray-200 uppercase rounded-[50px] hover:bg-gray-300 border-gray-500 text-black text-lg font-medium p-3 cursor-pointer transition-all hover:scale-105 duration-200'
                                                        onClick={clickNext}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>
                ) : (
                    <>
                        <main className='flex-1 p-5 bg-blue-500 lg:rounded-l-[15%]'>
                            <div className='col-span-12'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 flex justify-center items-center h-[90vh]'>
                                        <div className='w-[80%]'>
                                            <div className='grid-cols-12 grid gap-3'>
                                                <div className='col-span-12 text-center'>
                                                    <span className='text-white text-4xl font-bold'>Forget Password</span>
                                                </div>
                                                <div className='col-span-12 mt-3'>
                                                    <input type="text" className='bg-white text-gray-500 text-base font-normal p-4 rounded-[50px] w-full outline-none' placeholder='Email Address' />
                                                </div>
                                                <div className='col-span-12 mt-3 flex justify-center'>
                                                    <button
                                                        className='w-1/2 bg-gray-200 uppercase rounded-[50px] hover:bg-gray-300 border-gray-500 text-black text-lg font-medium p-3 cursor-pointer transition-all hover:scale-105 duration-200'
                                                        onClick={clickNext}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </>
                )}
            </div>
        </>
    )
}

export default page
import React from 'react'
import hero from "Assets/Pics/category1.jpg"
export default function Categories() {
    return (
        <main className='mb-6'>
            <div className=' w-auto'>
                <div className='text-center mx-[80px]'>
                    <img src={hero} alt="hero" className='w-[100%] ' />
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    <h1 className='text-5xl'>Category</h1>
                </div>
            </div>
            <div className=''>
                <div className='mx-[80px] flex flex-col md:flex-row h-[300px]'>
                    <div className='w-full md:1/4 bg-blue-500'></div>
                    <div className='w-full md:3/4 bg-red-500'></div>
                </div>
            </div>
        </main>
    )
}

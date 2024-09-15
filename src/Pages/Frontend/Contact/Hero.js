import React from 'react'
import hero from "Assets/Pics/h2_hero2.jpg"
import Map from './Map'
import Form from './Form'
import Information from '../Home/Information'

export default function Hero() {
    return (
        <main>
            <div className='w-auto mb-6 mt-4'>
                <div className='mx-[70px] relative'>
                    <div className='text-center relative'>
                        <img src={hero} alt="hero" className='w-[100%] rounded-lg' />

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500">
                            <h1 className='text-5xl'>Contact</h1>
                        </div>
                    </div>

                    <div className='my-8'>
                        <Map />
                    </div>

                    <div className='mt-5'>
                        <Form />
                    </div>
                </div>
            </div>
            <Information />
        </main>
    )
}

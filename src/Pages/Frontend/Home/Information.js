import React from 'react'
import Logo from "Assets/Pics/logo.png.webp"
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube } from 'react-feather'
export default function Information() {
    return (
        <div className=' px-11 py-11 bg-pink-100'>
            <div className='flex flex-col lg:flex-row md:flex-row items-center'>

                <div className='w-1/4 '>
                    <div className='py-2'>
                        <img src={Logo} alt="" />
                        <p className='mt-2'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                    </div>
                    <div className='flex mx-2 mt-4'>
                        <Link><Facebook className='border mx-2' /></Link>
                        <Link><Instagram className='border mx-2' /></Link>
                        <Link><Linkedin className='border mx-2' /></Link>
                        <Link><Youtube className='border mx-2' /></Link>
                    </div>
                </div>

                <div className='w-1/4 sm:mt-6'>
                    <div>
                        <h1 className='text-2xl font-semibold w-full'>Book Category</h1>
                    </div>
                    <div className='mt-3'>
                        <Link><p>History</p></Link>
                        <Link><p>Horror - Thriller</p></Link>
                        <Link><p>Love Stories</p></Link>
                        <Link><p>Science Fiction</p></Link>
                        <Link><p>Business</p></Link>
                    </div>
                </div>

                <div className='w-1/4 sm:mt-6'>
                    <div className='mt-11'>
                        <Link><p>Biography</p></Link>
                        <Link><p>Astrology</p></Link>
                        <Link><p>Digital Marketing</p></Link>
                        <Link><p>Software Development</p></Link>
                        <Link><p>Ecommerce</p></Link>
                    </div>
                </div>

                <div className='w-1/4 sm:mt-6'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Site Map</h1>
                    </div>
                    <div className='mt-3'>
                        <Link><p>Home</p></Link>
                        <Link><p>About Us</p></Link>
                        <Link><p>FAQs</p></Link>
                        <Link><p>Blog</p></Link>
                        <Link><p>Contact</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

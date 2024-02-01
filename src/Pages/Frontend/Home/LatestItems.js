import React, { useContext, useState } from 'react'
import SmokeGuy from "Assets/Pics/1222095-neon-mask-guy-with-green-smoke.jpg"
import NeonGuy from "Assets/Pics/mask-guy-neon-man-with-smoke-bomb-4k-hi-1920x1080.jpg"
import bookSlides from 'Contexts/BooksContext'
import { CartContext } from 'Contexts/CartContext'
import { Link, useParams } from 'react-router-dom'
import { BsEyeFill } from 'react-icons/bs'
import Button from './Button'

export default function LatestItems() {
    const [slides, setSlides] = useState(bookSlides)
    const { addToCart } = useContext(CartContext);

    const filtercate = (x) => {
        const filterProduct = bookSlides.filter((curElm) => {
            return curElm.type === x
        })
        setSlides(filterProduct)
    }
    return (
        <section>
            <div className='container mx-auto flex flex-col'>
                <div className='flex flex-col justify-between md:flex-row mx-9 mb-3'>

                    <div className='text-3xl'>Latest Published items</div>
                    <div>
                        <button className='border p-3 rounded mx-2' onClick={() => setSlides(bookSlides)} >All</button>
                        <button className='border p-3 rounded mx-2' onClick={() => filtercate('horror')}>Horror</button>
                        <button className='border p-3 rounded mx-2' onClick={() => filtercate('thriller')}>Thriller</button>
                        <button className='border p-3 rounded mx-2' onClick={() => filtercate('scienceFiction')}>Science Fiction</button>
                        <button className='border p-3 rounded mx-2' onClick={() => filtercate('history')}>History</button>
                    </div>

                </div>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 group relative">
                        {slides.map((slide) => (
                            <div key={slide.id} className="relative p-4 border">
                                <img src={slide.src} alt={slide.title} className="w-full h-auto rounded-md" />
                                <h2 className="mt-2 text-xl font-semibold">{slide.title}</h2>
                                <p className="text-gray-600">{slide.info}</p>

                                <div className="flex ">
                                    <button className="bg-blue-500 rounded p-2" onClick={() => addToCart(slide, slide.id)}>
                                        Add to Cart
                                    </button>
                                    <Link to={`/Books/${slide.id}`} className="flex items-center bg-red-400 p-4"><BsEyeFill className="hover:text-white" /></Link>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <div className='m-auto mt-6 mb-9' >
                    <Button text="Browse More" />
                </div>
            </div>



            <div className='flex flex-col md:flex-row lg:flex-row mt-5 mx-9'>
                <div className=' w-2/4 mx-3 sm:w-full'>
                    <img className='' src={SmokeGuy} alt="" />
                </div>

                <div className='w-2/4 mx-3 sm:w-full'>
                    <img className='' src={NeonGuy} alt="" />
                </div>
            </div>


            <div className='flex flex-col bg-blue-300 mx-11 items-center pt-10 my-9 py-11'>

                <div className='flex flex-col items-center'>
                    <div className='text-3xl text-white'>Join Newsletter</div>
                    <p className='mx-auto'>Lorem started its journey with cast iron (CI) products in 1980. The initial main<br /> objective  was to ensure pure water and affordable irrigation.</p>
                </div>

                <div className='flex flex-col lg:flex-row mt-3'>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                    <button className="rounded-full ... bg-red-600 px-7">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

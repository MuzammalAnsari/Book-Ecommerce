import React from 'react';

export default function Featured() {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-3/4 mr-4">

                    <div className='flex justify-between py-5 px-7'>
                        <h1 className=' text-3xl '>
                            Featured This Week
                        </h1>
                        <button className='border-b hover:bg-gray-300 hover:text-white p-3 rounded '>View All</button>
                    </div>


                    <div className="bg-gray-200  rounded-lg flex flex-col lg:flex-row items-center py-8">
                        <div className='flex flex-col lg:flex-row items-center p-4 md:p-6  justify-between'>
                            <img
                                src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best-books1.jpg"
                                alt="Product"
                                className="max-w-[200px] md:max-w-full rounded-lg"
                            />

                            <div className=" lg:ms-11  mx-auto">
                                <h2 className="text-3xl font-semibold">Product Name</h2>
                                <p className="text-gray-600 text-2xl">Product Descriptions</p>
                                <p className="text-red-500 font-semibold text-2xl mt-2">$50.00</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full md:w-1/4 mt-4 md:mt-0">
                    <img
                        src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/ad.jpg"
                        alt="Second Image"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}

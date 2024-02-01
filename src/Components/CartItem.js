import { CartContext } from 'Contexts/CartContext'
import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function CartItem({ item }) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    const { id, title, src, price, amount } = item
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <Link to={`/Books/${id}`}>
                    <img src={src} className='max-w-[80px]' />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link className='text-sm uppercase hover:underline'>{title}</Link>
                        <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'><IoMdClose className='text-gray-500 hover:text-red-500 translate' /></div>
                    </div>

                    <div className="flex gap-x-2 h=[36px]">
                        <div className='flex flex-1 max-w-[100px] items-center h-full border'>
                            <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer bg-red-500'><IoMdRemove /></div>
                            <div className='flex h-full justify-center items-center px-2'>{amount}</div>
                            <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'><IoMdAdd /></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p>Price:</p>
                        <div className=''>$:{price}</div>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total Price:</p>
                        <div className=''>{`$${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>



        </div >
    )
}

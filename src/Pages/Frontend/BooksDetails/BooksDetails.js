import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import bookSlides from 'Contexts/BooksContext';
import { CartContext } from 'Contexts/CartContext';

export default function BooksDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext)
    const product = bookSlides.find((item) => item.id === parseInt(id));

    return (
        <main className='container mx-auto py-8'>
            {product ? (
                <div className='bg-white rounded-lg shadow-lg p-6  flex flex-col lg:flex-row'>
                    <div>
                        <img src={product.src} alt={product.title} className='w-[150px] rounded-lg shadow-md lg:w-[250px]' />
                    </div>
                    <div className='flex flex-col  m-auto'>
                        <h1 className='text-3xl font-semibold mb-4'>{product.title}</h1>
                        <p className='text-gray-600 mb-4 text-2xl'>{product.info}</p>
                        <div>$:{product.price}</div>
                        <button className='bg-blue-500 rounded py-3 mt-2' onClick={() => addToCart(product, product.id)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ) : (
                <p className='text-red-500 text-center mt-4'>Book not found</p>
            )}
        </main>
    );
}

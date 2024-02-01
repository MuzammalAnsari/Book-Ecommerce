import { SidebarContext } from 'Contexts/SidebarContext';
import React, { useContext, useState } from 'react';
import { BsArrowBarRight, BsTrash } from 'react-icons/bs';
import CartItem from './CartItem';
import { CartContext } from 'Contexts/CartContext';
import { auth, firestore, storage } from 'Config/firebase'; // Import Firebase and its Firestore
import { message } from 'antd';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// Custom function to send order data to Firebase
const sendOrderToFirebase = async (orderData) => {
    const user = auth.currentUser;

    if (!user) {
        console.log('User is not authenticated.');
        return false;
    }

    try {
        // Upload images and get download URLs
        const downloadUrls = await Promise.all(
            orderData.items.map(async (item) => {
                const imageRef = ref(storage, `images/${item.id}.jpg`);
                await uploadBytes(imageRef, item.imageFile); // Assuming you have the image file in item.imageFile
                return await getDownloadURL(imageRef);
            })
        );

        // Update item data with download URLs
        orderData.items = orderData.items.map((item, index) => ({
            ...item,
            imageUrl: downloadUrls[index],
        }));

        // Add order data to Firestore
        const docRef = await addDoc(collection(firestore, 'orders'), {
            userId: user.uid,
            items: orderData.items,
            totalAmount: orderData.totalAmount,
            createdAt: new Date(),
        });

        console.log('Document written with ID:', docRef.id);
        return true;
    } catch (e) {
        console.error('Error adding document:', e);
        return false;
    }
};


export default function Sidebar() {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total, itemAmount } = useContext(CartContext);
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    // Function to handle the checkout process
    const handleCheckout = async () => {
        setCheckoutLoading(true);

        // Check if the cart is empty
        if (cart.length === 0) {
            message.warning('Your cart is empty. Please add items before checking out.');
            setCheckoutLoading(false);
            return;
        }

        // Prepare data to send to Firebase (example data structure)
        const orderData = {
            items: cart,
            totalAmount: total,
        };

        const orderSent = await sendOrderToFirebase(orderData);

        if (orderSent) {
            // Clear the cart after a successful checkout
            clearCart();
            message.success("Books successfully ordered");
        }

        setCheckoutLoading(false);
    };

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} mb-6 bg-white fixed top-0  shadow-md
            md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-3 border-b'>
                <div className='upper-case text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
                <div className='cursor-pointer w-8 h-2 flex justify-center items-center' onClick={handleClose}>
                    <BsArrowBarRight className='text-2xl' />
                </div>
            </div>

            <div className='flex flex-col gap-y-3  pb-1 border-b'>
                <div className='flex w-full justify-between items-center' >
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                    </div>
                    <div className='cursor-pointer py-1 bg-red-500 text-white mt-2 w-8 h-8 flex justify-center items-center text-xl rounded' onClick={clearCart}>
                        <BsTrash />
                    </div>
                </div>
                {auth.currentUser ? (
                    <button
                        className={`bg-gray-200 flex justify-center items-center p-2 text-primary w-full font-medium ${checkoutLoading ? 'cursor-not-allowed' : ''}`}
                        onClick={handleCheckout}
                        disabled={checkoutLoading}
                    >
                        {checkoutLoading ? 'Processing...' : 'Check out'}
                    </button>
                ) : (
                    <div className="text-center text-sm text-gray-600">
                        Please <Link to="/auth/login" className='text-blue-500 underline hover:text-red-500'>Login</Link> to continue checkout.
                    </div>
                )}
            </div>

            <div className=' flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                {cart.map(item => {
                    return <CartItem item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
}

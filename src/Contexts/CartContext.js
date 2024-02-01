import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0)
    const [total, setTotal] = useState(0)

    //total amount
    useEffect(() => {
        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(total)
    })


    //update item Amount like how many items are added
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount
            }, 0)
            setItemAmount(amount)
        }
    }, [cart])


    //Clear Cart
    const clearCart = () => {
        setCart([])
    }

    //Add to cart
    const addToCart = (product) => {
        const newItem = { ...product, amount: 1 };
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, amount: item.amount + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, newItem]);
        }
    };


    //Remove item From Cart
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => {
            return item.id !== id
        })
        setCart(newCart)
    }

    //decrease Amount
    const decreaseAmount = (id) => {
        const cartItem = cart.find((item) => {
            // console.log('item', item)
            return item.id === id
        })
        if (cartItem) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return { ...item, amount: cartItem.amount - 1 }
                } else {
                    return item
                }
            })
            setCart(newCart)
        }

        if (cartItem.amount < 2) {
            removeFromCart(id)
        }
    }

    //increase Amount
    const increaseAmount = (id) => {
        const cartItem = cart.find((item) => item.id === id)
        addToCart(cartItem)
    }

    // console.log('cart', cart);

    return (
        <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, decreaseAmount, increaseAmount, itemAmount, total }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

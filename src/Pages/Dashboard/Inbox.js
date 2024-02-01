import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { firestore } from 'Config/firebase';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

const Inbox = () => {
    const [checkoutBooks, setCheckoutBooks] = useState([]);

    async function fetchCheckoutBooks() {
        const checkoutBooksCollection = collection(firestore, 'orders'); // Replace with your actual Firestore collection name
        const querySnapshot = await getDocs(checkoutBooksCollection);
        const checkoutBooks = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            checkoutBooks.push({
                id: doc.id,
                product: data.product,
                quantity: data.quantity,
            });
        });

        return checkoutBooks;
    }

    const handleDelete = async (id) => {
        try {
            const checkoutDocRef = doc(firestore, 'orders', id); // Replace with your actual Firestore collection name
            await deleteDoc(checkoutDocRef);
            setCheckoutBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await fetchCheckoutBooks();
            setCheckoutBooks(books);
        };

        fetchBooks();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Orders</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 text-left py-2 px-4">ID</th>
                            <th className="w-1/3 text-left py-2 px-4">Product</th>
                            <th className="w-1/3 text-left py-2 px-4">Quantity</th>
                            <th className="w-1/3 text-left py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {checkoutBooks.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-100">
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{order.id}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{order.product}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{order.quantity}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inbox;

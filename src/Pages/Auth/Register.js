import { auth, firestore } from 'Config/firebase';
import { useAuthContext } from 'Contexts/AuthContext';
import { message } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { dispatch } = useAuthContext();
    const path = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isLoading, setIsLoading] = useState(false); // Added loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = formData;

        // Validate password match
        if (password !== confirmPassword) {
            message.error("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // console.log('userCredential', userCredential)
                // console.log('user', user)
                createUserProfile(user)
                message.success("Registration successful!");
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    const createUserProfile = async (user) => {
        let { name } = formData
        const { email, uid } = user

        const userData = {
            name, email, uid,
            dateCreated: serverTimestamp(),
            roles: ["customer"]
        }

        try {
            await setDoc(doc(firestore, "users", uid), userData)
            // message.success("A new user has been created successfully")
            dispatch({ type: "SET_LOGGED_IN", payload: { user: userData } })
        } catch (e) {
            message.error("Something went wrong while creating user profile")
            console.error("Error adding document: ", e);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-800">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-800">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading} // Disable the button while loading
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className="mt-4 text-gray-600 text-center">
                    Already have an account? <Link to="/auth/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

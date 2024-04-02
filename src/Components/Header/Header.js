import React, { useContext, useEffect, useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Pics/logo.png.webp';
import { SidebarContext } from 'Contexts/SidebarContext';
import { CartContext } from 'Contexts/CartContext';
import { useAuthContext } from 'Contexts/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from 'Config/firebase';
import { message } from 'antd';

function Header() {
    const { isAuth, dispatch } = useAuthContext()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    // const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext)
    const { itemAmount } = useContext(CartContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                message.success("Logout Successfully")
                dispatch({ type: 'SET_LOG_OUT' })
                navigate("/")
            })
            .catch(err => {
                console.log('err', err)
                message.error("Error in LogOut")
            })
    }
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    }, []);

    // const handlePageDropdownToggle = () => {
    //     setIsPageDropdownOpen(!isPageDropdownOpen);
    // };

    // const closePageDropdown = () => {
    //     setIsPageDropdownOpen(false);
    // };

    return (
        <div>
            <header className={`${isActive ? 'bg-white py-4 ' : 'bg-blue-500 py-6'}  fixed z-10 w-full `}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        {/* Use Link for the home link */}
                        <Link to="/">
                            <img className="h-10 w-auto" src={Logo} alt="Logo" />
                        </Link>

                        <div className="relative hidden md:flex">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border rounded-full py-1 px-4 w-64 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <FaSearch className="text-red-500" />
                            </button>
                        </div>

                        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative">
                            <FaShoppingCart className="text-2xl hover:text-tertiary-500" />
                            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px]
                            w-[18px] h-[18px] text-white flex justify-center items-center rounded-full">{itemAmount}</div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        {/* <Link to="/dashboard" className="text-white ms-6 boarder hover:bg-blue-600 bg-light-400 p-2 rounded-3xl mt-3">Dashboard</Link> */}
                        {!isAuth ?
                            <Link to="/auth/login">
                                <button className="bg-blue-500 border hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-2">
                                    Sign in
                                </button>
                            </Link>
                            :
                            <Link to="/">
                                <button className="bg-white-500 border hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-2" onClick={handleLogout}>
                                    Log out
                                </button>
                            </Link>
                        }
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <FaBars className="text-2xl" />
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-gray-800">
                        <div className="flex flex-col items-start space-x-4 px-4 py-10 border-t">
                            {/* <Link to="/dashboard" className="text-white ms-6">Dashboard</Link> */}
                            {!isAuth ?
                                <Link to="/auth/login">
                                    <button className="bg-blue-500 border hover:bg-red-600 text-white py-2 px-4 rounded-full mt-2">
                                        Sign in
                                    </button>
                                </Link>
                                :
                                <Link to="/">
                                    <button className="bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-2" onClick={handleLogout}>
                                        Log out
                                    </button>
                                </Link>
                            }
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border rounded-full py-1 px-4 w-64 focus:outline-none focus:ring focus:border-blue-300 mt-2"
                                />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <FaSearch className="text-red-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                )
                }
            </header >

            <nav className="bg-pink-100 text-white pt-[100px] pb-4">
                <div className="container mx-auto flex justify-center space-x-4 text-black">
                    <Link to="/" className="hover:text-gray-500 text-2xl">Home</Link>
                    {/* <Link to="/categories">Categories</Link> */}
                    <Link to="/about" className="hover:text-gray-500 text-2xl">About </Link>
                    <Link to="/contact" className="hover:text-gray-500 text-2xl">Contact </Link>

                    {/* <div
                        className="group relative"
                        onMouseEnter={handlePageDropdownToggle}
                        onMouseLeave={closePageDropdown}
                    >
                        <span className="cursor-pointer hover:text-red-500">Link 5</span>
                        <div className={`hidden ${isPageDropdownOpen ? 'block' : 'hidden'} absolute z-10 rounded-lg mt-2 px-10`}>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-600">
                                Login
                            </Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-600">
                                Cart
                            </Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-600">
                                Checkout
                            </Link>
                            <Link to="/" className="block px-4 py-2 hover:bg-gray-600">
                                Book Details
                            </Link>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div >
    );
}

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaHome,
    FaUser,
    FaEnvelope,
    FaCog,
    FaSignOutAlt,
} from 'react-icons/fa';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`bg-gray-800 text-white h-screen fixed top-0 ${isOpen ? 'w-64' : 'w-36'} transition-all duration-300 ease-in-out overflow-y-auto`}>
            <button
                className={`w-16 h-16 p-2 text-gray-300 hover:text-white absolute top-0 right-0 ${isOpen ? 'transform rotate-180' : ''}`}
                onClick={toggleSidebar}
            >
                {isOpen ? '➖' : '➕'}
            </button>
            {/* Sidebar content */}
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Ansari</h1>
                <ul className="mt-4">
                    <li className="mb-2">
                        <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                            <FaHome className="mr-2" />
                            Home
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/dashboard/inbox" className="text-gray-300 hover:text-white flex items-center">
                            <FaUser className="mr-2" />
                            Inbox
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/dashboard/messages" className="text-gray-300 hover:text-white flex items-center">
                            <FaEnvelope className="mr-2" />
                            <span className=''>Message</span>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/logout" className="text-gray-300 hover:text-white flex items-center">
                            <FaSignOutAlt className="mr-2" />
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;

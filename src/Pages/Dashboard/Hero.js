import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Messages from './Messages';
import LeftNav from './LeftNav';
import Inbox from './Inbox';

const Hero = () => {
    return (
        <div className="flex">
            <LeftNav />
            <main className="flex-grow p-4 ms-[200px]">
                <Routes>
                    
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/inbox" element={<Inbox />} />
                </Routes>
            </main>
        </div>
    );
};

export default Hero;

import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from "./Home"
import About from "./About"
import Contact from './Contact'
import Categories from './Categories'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import BooksDetails from './BooksDetails'
import Sidebar from 'Components/Sidebar'

export default function Index() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Books/:id' element={<BooksDetails />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <Sidebar />
            <Footer />
        </>
    )
}

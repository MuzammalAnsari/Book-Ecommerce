import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from "./Frontend"
import Dashboard from './Dashboard'
import Auth from './Auth'
import { useAuthContext } from 'Contexts/AuthContext'
import PrivateRoute from 'Components/PrivateRoute'

export default function Index() {
    const { isAuth } = useAuthContext()
    // console.log('isAuth', isAuth)

    return (
        <>
            <Routes>
                <Route path='/*' element={<PrivateRoute Component={Frontend} />} />
                {/* <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} allowedRoles={["superAdmin", "customer"]} />} /> */}
                <Route path='/auth/*' element={<Auth />} />
            </Routes>
        </>
    )
}

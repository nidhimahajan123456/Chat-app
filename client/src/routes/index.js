import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Authentication from '../modules/Authentication';
import Dashboard from '../modules/Dashboard';
const ProtectedRoute = ({ children}) => {
    const isLoggedIn = localStorage.getItem('user:token') !== null || true;

    if (!isLoggedIn) {
        return <Navigate to={'/users/sign_in'} />
    } else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
        console.log('object :>> ', window.location.pathname);
        return <Navigate to={'/'} />
    }
    return children

}

function index() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path='/users/sign_in' element={
                    <ProtectedRoute>
                        <Authentication isSignInPage={true} />
                    </ProtectedRoute>
                } />
                <Route path='/users/sign_up' element={
                    <ProtectedRoute isSignInPage={false}>
                        <Authentication isSignInPage={false} />
                    </ProtectedRoute>
                } />
            </Routes>

        </>
    )
}

export default index
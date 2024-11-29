import { Navigate, Route, Routes } from 'react-router-dom'
import { Auth } from '../pages/Auth'
import React from 'react'
import { NotFound } from '../pages/NotFound'
import { AuthProvider } from '../context/AuthContext'
const AuthRoutes: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route 
                    path=''
                    element={<Navigate to='iniciar-sesion' />}
                />
                <Route path=':auth' element={<Auth />} />
                <Route 
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </AuthProvider>
    )
}

export default AuthRoutes
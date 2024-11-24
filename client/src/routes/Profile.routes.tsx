import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'
import { AuthProvider } from '../context/AuthContext'

export const ProfileRoutes: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route 
                    path=''
                    element={<Profile />}
                />
                <Route
                    path='*'
                    element={<NotFound />}
                />
            </Routes>
        </AuthProvider>
    )
}

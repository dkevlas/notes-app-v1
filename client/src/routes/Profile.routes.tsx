import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'
import { TasksProvider } from '../context/TasksContext'
import { AuthProvider } from '../context/AuthContext'
import { Navbar } from '../components/Menu/Navbar'

const ProfileRoutes: React.FC = () => {
    return (
        <AuthProvider>
            <TasksProvider>
                <Routes>
                    <Route path='' element={<Navbar />}>
                        <Route path='' element={<Profile />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </TasksProvider>
        </AuthProvider>
    )
}

export default ProfileRoutes;
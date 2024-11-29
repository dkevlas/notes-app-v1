import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TasksProvider } from '../context/TasksContext'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Menu/Navbar'
import { NotFound } from '../pages/NotFound'

const HomeRoutes: React.FC = () => {
    return (
        <TasksProvider >
            <Routes>
                <Route path='' element={<Navbar />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </TasksProvider>
    )
};

export default HomeRoutes; 
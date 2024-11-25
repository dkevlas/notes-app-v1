import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { AuthRoutes } from './routes/Auth.routes'
import { TasksRoutes } from './routes/Tasks.routes'
import { ProfileRoutes } from './routes/Profile.routes'
import { Navbar } from './components/Menu/Navbar'


function App() {
  return (
      <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <Navbar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='notas/*' element={<TasksRoutes />} />
            <Route path='cuenta/*' element={<AuthRoutes />} />
            <Route path='perfil/*' element={<ProfileRoutes />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App

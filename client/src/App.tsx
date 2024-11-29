import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from './routes/Auth.routes'
import { HomeRoutes } from './routes/Home.routes'
import { ProfileRoutes } from './routes/Profile.routes'


function App() {
  return (
      <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
          <Routes>
            <Route path='/*' element={<HomeRoutes />} />
            <Route path='perfil/*' element={<ProfileRoutes />} />
            <Route path='cuenta/*' element={<AuthRoutes />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
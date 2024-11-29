import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { NotFound } from './pages/NotFound';

const Home = lazy(()=> import('./routes/Home.routes'));
const Profile = lazy(()=> import('./routes/Profile.routes'))
const Auth = lazy(()=> import('./routes/Auth.routes'))

function App() {
  return (
      <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
          <Suspense>
            <Routes>
              <Route path='/*' element={<Home />} />
              <Route path='/perfil/*' element={<Profile />} />
              <Route path='/cuenta/*' element={<Auth />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </Suspense>
      </BrowserRouter>
  )
}

export default App;

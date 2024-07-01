import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'
import { ProyectViewPage } from './pages/ProyectViewPage'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/proyectView" element={<ProyectViewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

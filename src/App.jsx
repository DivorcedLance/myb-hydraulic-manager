import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage'
import { ProjectViewPage } from './pages/ProjectViewPage'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/projectView" element={<ProjectViewPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

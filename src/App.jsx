import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProyectViewPage } from "./pages/ProyectViewPage";
import { AsignarTarea } from "./JefeTecnico/AsignarTarea/AsignarTarea";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/proyectView" element={<ProyectViewPage />} />
          <Route path="/asignarTarea" element={<AsignarTarea />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

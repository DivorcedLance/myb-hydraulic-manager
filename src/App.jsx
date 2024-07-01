import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProyectViewPage } from "./pages/ProyectViewPage";
import { AsignarTarea } from "./pages/AsignarTarea";
import { RechazarReparacion } from "./pages/RechazarReparacion";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/proyectView" element={<ProyectViewPage />} />
          <Route path="/asignarTarea" element={<AsignarTarea />} />
          <Route path="/recharzarReparacion" element={<RechazarReparacion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

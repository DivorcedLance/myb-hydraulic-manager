import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProjectViewPage } from "./pages/ProjectViewPage";
import { AsignarTarea } from "./pages/AsignarTarea";
import { RechazarReparacion } from "./pages/RechazarReparacion";
import { ProyeccionRepuestos } from "./pages/ProyeccionRepuestos";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/projectView" element={<ProjectViewPage />} />
          <Route path="/asignarTarea" element={<AsignarTarea />} />
          <Route path="/recharzarReparacion" element={<RechazarReparacion />} />
          <Route path="*" element={<ProyeccionRepuestos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

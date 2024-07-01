import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProjectViewPage } from "./pages/ProjectViewPage";
import { AsignarTareaPage } from "./pages/AsignarTareaPage";
import { RechazarReparacion } from "./pages/RechazarReparacion";
import { ProyeccionRepuestos } from "./pages/ProyeccionRepuestos";
import { ProjectListPage } from "./pages/ProjectListPage";
import { RegistroProyecto } from "./pages/RegistroProyecto";

function App() {
  return (
    <>
      <BrowserRouter basename="/myb-hydraulic-manager">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/crearProyecto" element={<RegistroProyecto />} />
          <Route path="/projectList" element={<ProjectListPage />} />
          <Route path="/projectView" element={<ProjectViewPage />} />
          <Route path="/proyeccionRepuestos" element={<ProyeccionRepuestos />} />
          <Route path="/asignarTarea" element={<AsignarTareaPage />} />
          <Route path="/recharzarReparacion" element={<RechazarReparacion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

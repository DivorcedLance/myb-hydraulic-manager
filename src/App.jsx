import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import { ProjectViewPage } from "./pages/ProjectViewPage";
import { AsignarTareaPage } from "./pages/AsignarTareaPage";
import { RechazarReparacion } from "./pages/RechazarReparacion";
import { ProyeccionRepuestos } from "./pages/ProyeccionRepuestos";
import { ProjectListPage } from "./pages/ProjectListPage";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/projectView" element={<ProjectViewPage />} />
          <Route path="/projectList" element={<ProjectListPage />} />
          <Route path="/asignarTarea" element={<AsignarTareaPage />} />
          <Route path="/recharzarReparacion" element={<RechazarReparacion />} />
          <Route path="*" element={<ProyeccionRepuestos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

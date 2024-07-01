import { Link } from "react-router-dom";
import { FileInput } from "./FileInput";
import { Button } from "./ui/button";

export function ProjectActionsEmployee({ project }) {

  return (
    (project.status == 1) ? (
      <div className="flex justify-around w-full items-center">
        <div className="flex flex-col">
          <FileInput fileName="Reporte"/>
          <Link to="/aprobarReparacion">
            <Button className="w-full">Enviar Reportes</Button>
          </Link>
        </div>
        <div className="flex flex-col">
          <FileInput fileName="Informe de Pruebas"/>
          <Link to="/aprobarReparacion">
            <Button className="w-full">Registrar Pruebas</Button>
          </Link>
        </div>
      </div>
    ) : (project.status == 2) ? (
      <h1 className="font-bold text-xl">Esperando Aprobación...</h1>
    ) : (project.status == 4) ? (
      <Button className="w-full">Pintado y Embalaje Listos</Button>
    ) : null
)
}

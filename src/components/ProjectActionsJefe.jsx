import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { FileInput } from "./FileInput"

export function ProjectActionsJefe({ project }) {

  return (
      (project.status == 0) ? (
        <div>
          <Link to="/asignarTarea">
            <Button className="w-full">Asignar Tarea de Reparación</Button>
          </Link>
        </div>
      ) : (project.status == 2) ? (
        <div className="flex justify-around w-full items-center">
          <div className="flex flex-col">
            <FileInput fileName="Informe de Control de Calidad"/>
            <Link to="/aprobarReparacion">
              <Button className="w-full">Aprobar Reparación</Button>
            </Link>
          </div>
          <Link to="/recharzarReparacion">
            <Button className="w-full">Rechazar Reparación</Button>
          </Link>
        </div>
      ) : (project.status == 3) ? (
        <div>
          <Link to="/asignarTarea">
            <Button className="w-full">Asignar Tarea de Pintado y Embalaje</Button>
          </Link>
        </div>
      ) : (project.status == 5) ? (
        <div className="flex justify-around w-full items-center">
          <div className="flex flex-col">
            <FileInput fileName="Informe de Ventas"/>
            <Link to="/registrarInformeDeVentas">
              <Button className="w-full">Registrar Informe De Ventas</Button>
            </Link>
          </div>
        </div>
      ) : null
  )
}
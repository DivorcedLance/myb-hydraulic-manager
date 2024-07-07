import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FileInput } from "../FileInput"
import { ReplacementsModal } from "../ReplacementsModal"

export function ProjectActionsJefe({ project }) {

  return (
      (project.status == 0) ? (
        <ReplacementsModal replacements={project.replacements}/>
      ) : (project.status == 1) ? (
        <div>
          <Link to="/asignarTarea">
            <Button className="w-full">Asignar Tarea de Reparación</Button>
          </Link>
        </div>
      ) : (project.status == 3) ? (
        <div className="flex justify-around w-full items-center">
          <div className="flex flex-col">
            <Link to="/aprobarReparacion">
              <Button className="w-full">Aprobar Reparación</Button>
            </Link>
          </div>
          <Link to="/recharzarReparacion">
            <Button className="w-full">Rechazar Reparación</Button>
          </Link>
        </div>
      ) : (project.status == 4) ? (
        <div>
          <FileInput fileName="Informe de Control de Calidad"/>
        </div>
      ) : (project.status == 5) ? (
        <div>
          <Link to="/asignarTarea">
            <Button className="w-full">Asignar Tarea de Pintado y Embalaje</Button>
          </Link>
        </div>
      ) : (project.status == 7) ? (
        <div className="flex justify-around w-full items-center">
          <FileInput fileName="Informe de Ventas"/>
        </div>
      ) : null
  )
}
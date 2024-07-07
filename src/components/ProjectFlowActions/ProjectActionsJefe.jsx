import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FileInputModal } from "../FileInputModal"
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
          <div className="flex flex-row gap-4">
            <Button className="w-full bg-green-600">Aprobar Reparación</Button>
            <Link to="/recharzarReparacion">
              <Button className="w-full bg-red-700">Rechazar Reparación</Button>
            </Link>
          </div>
        </div>
      ) : (project.status == 4) ? (
        <div>
          <FileInputModal fileName="Informe de Control de Calidad"/>
        </div>
      ) : (project.status == 5) ? (
        <div>
          <Link to="/asignarTarea">
            <Button className="w-full">Asignar Tarea de Pintado y Embalaje</Button>
          </Link>
        </div>
      ) : (project.status == 7) ? (
        <div className="flex justify-around w-full items-center">
          <FileInputModal fileName="Informe de Ventas"/>
        </div>
      ) : null
  )
}
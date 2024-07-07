import { FileInputModal } from "../FileInputModal";
import { Button } from "../ui/button";

export function ProjectActionsEmployee({ project }) {

  return (
    (project.status == 2) ? (
      <div className="flex justify-around w-full items-center">
        <div className="flex flex-col">
          <FileInputModal fileName="Reporte"/>
        </div>
        <div className="flex flex-col">
          <FileInputModal fileName="Informe de Pruebas"/>
        </div>
      </div>
    ) : (project.status == 3) ? (
      <h1 className="font-bold text-xl">Esperando Aprobación...</h1>
    ) : (project.status == 6) ? (
      <Button className="w-full">Pintado y Embalaje Listos</Button>
    ) : null
)
}

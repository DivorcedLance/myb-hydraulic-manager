import { Button } from "./ui/button";

export function ProjectActionsSales({ project }) {
  return (
    (project.status == 6) ? (
      <div className="flex gap-4">
        <Button className="w-full">Descargar Documentación</Button>
        <Button className="w-full">Cerrar Proyecto</Button>
      </div>
    ) : null)
}

import { Button } from "../ui/button";
import { ReparandoView } from "../ReparandoView";

export function ProjectActionsEmployee({ project }) {

  return (
    (project.status == 2) ? (
      <ReparandoView />
    ) : (project.status == 3) ? (
      <h1 className="font-bold text-xl">Esperando Aprobación...</h1>
    ) : (project.status == 6) ? (
      <Button className="w-full">Pintado y Embalaje Listos</Button>
    ) : null
)
}

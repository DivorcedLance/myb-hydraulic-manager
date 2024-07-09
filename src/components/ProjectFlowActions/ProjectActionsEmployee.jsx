import { Button } from "../ui/button";
import { ReparandoView } from "../ReparandoView";
import { useNavigate } from "react-router-dom";

export function ProjectActionsEmployee({ project }) {

  const navigate = useNavigate();

  return (
    (project.status == 2) ? (
      <ReparandoView />
    ) : (project.status == 3) ? (
      <h1 className="font-bold text-xl">Esperando Aprobación...</h1>
    ) : (project.status == 6) ? (
      <Button className="w-full" onClick={()=>{navigate("/tecnicoLibre")}}>Pintado y Embalaje Listos</Button>
    ) : null
)
}

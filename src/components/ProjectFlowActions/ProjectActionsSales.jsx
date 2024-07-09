import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function ProjectActionsSales({ project }) 
{
  const navigate = useNavigate(); 
  return (
    (project.status == 8) ? (
      <div className="flex gap-4">
        <Button className="w-full" onClick={()=>{navigate("/closeProject")}}>Cerrar Proyecto</Button>
      </div>
    ) : null)
}

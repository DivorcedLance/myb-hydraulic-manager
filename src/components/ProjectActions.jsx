import { ProjectActionsAdmin } from "./ProjectActionsAdmin";
import { ProjectActionsEmployee } from "./ProjectActionsEmployee";
import { ProjectActionsLogistic } from "./ProjectActionsLogistic";
import { ProjectActionsSales } from "./ProjectActionsSales";

export function ProjectActions({ project, role }) {

  return (
    (role === 'admin') ? (
      <ProjectActionsAdmin project={project}/>
    ) : 
    (role === 'empleado' || role === 'practicante') ? (
      <ProjectActionsEmployee project={project}/>
    ) : ( role === 'logistica') ? (
      <ProjectActionsLogistic project={project}/>
    ) : ( role === 'ventas') ? (
      <ProjectActionsSales project={project}/>
    ) : null
  )
}
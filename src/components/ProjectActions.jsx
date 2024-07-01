import { ProjectActionsJefe } from "./ProjectActionsJefe";
import { ProjectActionsEmployee } from "./ProjectActionsEmployee";
import { ProjectActionsLogistic } from "./ProjectActionsLogistic";
import { ProjectActionsSales } from "./ProjectActionsSales";

export function ProjectActions({ project, role='Empleado' }) {

  return (
    (project && role === 'Jefe') ? (
      <ProjectActionsJefe project={project}/>
    ) : (project && (role === 'Empleado' || role === 'Practicante')) ? (
      <ProjectActionsEmployee project={project}/>
    ) : (project && role === 'Logistica') ? (
      <ProjectActionsLogistic project={project}/>
    ) : (project && role === 'Ventas') ? (
      <ProjectActionsSales project={project}/>
    ) : null
  )
}
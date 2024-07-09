import { ProjectActionsJefe } from "./ProjectActionsJefe";
import { ProjectActionsEmployee } from "./ProjectActionsEmployee";
import { ProjectActionsLogistic } from "./ProjectActionsLogistic";
import { ProjectActionsSales } from "./ProjectActionsSales";

export function ProjectActions({ project, role = "Ventas" }) {
  return project && role === "Jefe" ? (
    <ProjectActionsJefe project={project} />
  ) : project &&
    (role === "Tecnico" || role === "Empleado" || role === "Practicante") ? (
    <ProjectActionsEmployee project={project} />
  ) : project && role === "Logistica" ? (
    <ProjectActionsLogistic project={project} />
  ) : project && role === "Ventas" ? (
    <ProjectActionsSales project={project} />
  ) : null;
}

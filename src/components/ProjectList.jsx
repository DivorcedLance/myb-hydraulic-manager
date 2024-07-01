import { useNavigate } from "react-router-dom";
import { ProjectHead } from "./ProjectHead";
import { Card, CardDescription } from "./ui/card";


export function ProjectList({ projects }) {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="p-4 border-4 border-black" onClick={()=>{
          navigate("/projectView")
        }}>
          <ProjectHead
            name={project.name}
            clientName={project.clientName}
            employees={project.employees}
          />
          <CardDescription>
            {project.description}
          </CardDescription>
        </Card>

      ))}
    </div>
  )
}
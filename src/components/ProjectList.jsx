import { useNavigate } from "react-router-dom";
import { ProjectHeader } from "./ProjectHeader";
import { Card, CardDescription } from "./ui/card";

export function ProjectList({ projects }) {

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="p-4 border-4 border-black" onClick={()=>{
          navigate("/projectView")
        }}>
          <ProjectHeader
            project={project}
          />
          <CardDescription>
            {project.description}
          </CardDescription>
        </Card>

      ))}
    </div>
  )
}
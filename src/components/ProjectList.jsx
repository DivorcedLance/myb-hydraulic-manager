import { useNavigate } from "react-router-dom";
import { ProjectHeader } from "./ProjectHeader";
import { Card, CardDescription } from "./ui/card";

import useStore from '@/store/useStore'

export function ProjectList({ projects }) {

  const navigate = useNavigate();
  const { setCurrentProjectId } = useStore()

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.id} className="p-4 border-4 border-black" onClick={()=>{
          setCurrentProjectId(project.id)
          navigate("/projectView")
        }}>
          <ProjectHeader
            project={project}
            showSeeMore={false}
          />
          <CardDescription>
            {project.description}
          </CardDescription>
        </Card>

      ))}
    </div>
  )
}
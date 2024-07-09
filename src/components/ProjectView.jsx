import { ProjectFlow } from '@/components/ProjectFlow/ProjectFlow'
import { ProjectHeader } from '@/components/ProjectHeader'
import { ProjectActions } from './ProjectFlowActions/ProjectActions'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom';

export function ProjectView({ project, role }) {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 mb-8">
      <ProjectHeader
        project={project}
      />
      {role!=="Tecnico" ?? <Button className="w-40" onClick={()=>{navigate("/projectList")}}>Otros Proyectos</Button>}
      <div className="flex justify-center px-16">
        <ProjectFlow status={project.status} />
      </div>
      <ProjectActions role={role} />
    </div>
  )
}

import { ProjectFlow } from '@/components/ProjectFlow'
import { ProjectHead } from '@/components/ProjectHead'

export function ProjectView({ project }) {

  return (
    <div className="flex flex-col gap-3">
      <ProjectHead
        name={project.name}
        clientName={project.clientName}
        employees={project.employees}
      />
      <div className="flex justify-center">
        <ProjectFlow status={project.status} />
      </div>
    </div>
  )
}

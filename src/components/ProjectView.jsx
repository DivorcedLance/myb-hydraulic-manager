import { ProjectFlow } from '@/components/ProjectFlow'
import { ProjectHead } from '@/components/ProjectHead'
import { ProjectActions } from './ProjectActions'

export function ProjectView({ project, role }) {

  return (
    <div className="flex flex-col gap-3 mb-8">
      <ProjectHead
        name={project.name}
        clientName={project.clientName}
        employees={project.employees}
      />
      <div className="flex justify-center px-16">
        <ProjectFlow status={project.status} />
      </div>
      <ProjectActions role={role} />
    </div>
  )
}

import { ProjectFlow } from '@/components/ProjectFLow/ProjectFlow'
import { ProjectHeader } from '@/components/ProjectHeader'
import { ProjectActions } from './ProjectFlowActions/ProjectActions'

export function ProjectView({ project, role }) {

  return (
    <div className="flex flex-col gap-3 mb-8">
      <ProjectHeader
        project={project}
      />
      <div className="flex justify-center px-16">
        <ProjectFlow status={project.status} />
      </div>
      <ProjectActions role={role} />
    </div>
  )
}

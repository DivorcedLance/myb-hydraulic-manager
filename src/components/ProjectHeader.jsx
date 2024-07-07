import { PictureCard } from './PictureCard'
import { ProjectSeeMoreModal } from './ProjectSeeMoreModal'

export function ProjectHeader({ project, showSeeMore = true}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-bold text-4xl">{project.name}</h1>
        <div>
          <h4 className="text-xl">{project.clientName}</h4>
          { showSeeMore && <ProjectSeeMoreModal project={project} /> }
        </div>
      </div>
      <div className="flex gap-2">
        {project.employees.map((employee) => (
          <PictureCard
            key={employee.name}
            name={employee.name}
            imageSrc={employee.imageSrc}
          />
        ))}
      </div>
    </div>
  )
}

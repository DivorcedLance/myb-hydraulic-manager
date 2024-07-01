import { PictureCard } from './PictureCard'

export function ProjectHead({ name, clientName, employees }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-bold text-4xl">{name}</h1>
        <h4 className="text-xl">{clientName}</h4>
      </div>
      <div className="flex gap-2">
        {employees.map((employee) => (
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

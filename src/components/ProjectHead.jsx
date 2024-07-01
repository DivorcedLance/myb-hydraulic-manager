import { PictureCard } from './PictureCard'
import { Button } from './ui/button'

export function ProjectHead({ name, clientName, employees }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-bold text-4xl">{name}</h1>
        <div>
          <h4 className="text-xl">{clientName}</h4>
          <Button className="w-full">Ver más</Button>
        </div>
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

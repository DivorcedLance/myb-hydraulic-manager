import { PictureCard } from "./PictureCard";

export function ProjectHead({
  name = 'Proyecto1',
  clientName = 'Cliente',
  employees = [
    { name: 'Empleado 1', role: 'Rol 1', imageSrc: 'https://robohash.org/1?set=set4&size=100x100'},
    { name: 'Empleado 2', role: 'Rol 2', imageSrc: 'https://robohash.org/2?set=set4&size=100x100'},
    { name: 'Empleado 3', role: 'Rol 3', imageSrc: 'https://robohash.org/3?set=set4&size=100x100'}
  ],
}) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col gap-4 items-start">
        <h1 className="font-bold text-6xl">{name}</h1>
        <h4 className="text-2xl">{clientName}</h4>
      </div>
      <div className="flex gap-2">
        {employees.map((employee) => (
          <PictureCard key={employee.name} name={employee.name} imageSrc={employee.imageSrc} />
        ))}
      </div>
    </div>
  )
}

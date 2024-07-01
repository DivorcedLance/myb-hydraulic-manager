import { ProjectList } from '@/components/ProjectList'

export function ProjectListPage() {
  const projects = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Este es el proyecto 1',
      clientName: 'Devenco',
      status: 6,
      employees: [
        {
          name: 'Manchas',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/1?set=set4&size=100x100',
        },
        {
          name: 'Grita',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/2?set=set4&size=100x100',
        },
        {
          name: 'Bluey',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/3?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 2,
      name: 'Proyecto2',
      description: 'Este es el proyecto 2',
      clientName: 'Pariona SAC',
      status: 2,
      employees: [
        {
          name: 'Sonic',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/4?set=set4&size=100x100',
        },
        {
          name: 'Mr. Sombrero',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/5?set=set4&size=100x100',
        },
        {
          name: 'Van',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/6?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 3,
      name: 'Proyecto3',
      description: 'Este es el proyecto 3',
      clientName: 'Jericó',
      status: 3,
      employees: [
        {
          name: 'Mateo',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/7?set=set4&size=100x100',
        },
        {
          name: 'Bowie',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/8?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 4,
      name: 'Proyecto4',
      description: 'Este es el proyecto 4',
      clientName: 'Coca Cola',
      status: 5,
      employees: [
        {
          name: 'Fanta',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/9?set=set4&size=100x100',
        },
        {
          name: 'Sprite',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/10?set=set4&size=100x100',
        },
      ],
    },
  ]
  return (
    <div>
      <ProjectList projects={projects}/>
    </div>
  )
}

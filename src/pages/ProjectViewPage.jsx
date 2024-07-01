import { Combobox } from '../components/ComboBox'
import { useState } from 'react'
import { ProjectView } from '@/components/ProjectView'
import { ProjectActions } from '@/components/ProjectActions'

export function ProjectViewPage() {
  const projects = [
    {
      id: 1,
      name: 'Proyecto 1',
      clientName: 'Devenco',
      status: 0,
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
      clientName: 'Pariona SAC',
      status: 1,
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
      clientName: 'Jericó',
      status: 2,
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
  ]

  const [selectedProject, setSelectedProject] = useState(projects[0])

  return (
    <div className="flex flex-col gap-3">
      <Combobox
        items={projects}
        getValue={(p) => {
          return p ? p.id : null;
        }}
        getLabel={(p) => {
          return p ? p.name : null;
        }}
        getRealValue={(p) => {
          return p
        }}
        onSelection={(p) => {
          setSelectedProject(p)
        }}
        itemName={'Proyecto'}
      />
      <ProjectView project={selectedProject} />
      <ProjectActions project={selectedProject}/>
    </div>
  )
}


// Son 
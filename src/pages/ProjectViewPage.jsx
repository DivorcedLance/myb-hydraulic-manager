import { Combobox } from '../components/ComboBox'
import { ProjectView } from '@/components/ProjectView'
import { ProjectActions } from '@/components/ProjectActions'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


export function ProjectViewPage() {

  const projects = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Este es el proyecto 1',
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
        {
          name: 'Perry',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/4?set=set4&size=100x100',
        }
      ],
    },
    {
      id: 2,
      name: 'Proyecto2',
      description: 'Este es el proyecto 2',
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
      description: 'Este es el proyecto 3',
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
    {
      id: 4,
      name: 'Proyecto4',
      description: 'Este es el proyecto 4',
      clientName: 'Coca Cola',
      status: 3,
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
    {
      id: 5,
      name: 'Proyecto5',
      description: 'Este es el proyecto 5',
      clientName: 'Pepsi',
      status: 4,
      employees: [
        {
          name: 'Mirinda',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/11?set=set4&size=100x100',
        },
        {
          name: '7Up',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/12?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 6,
      name: 'Proyecto6',
      description: 'Este es el proyecto 6',
      clientName: 'Inca Kola',
      status: 5,
      employees: [
        {
          name: 'Coca Cola',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/13?set=set4&size=100x100',
        },
        {
          name: 'Fanta',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/14?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 7,
      name: 'Proyecto7',
      description: 'Este es el proyecto 7',
      clientName: 'Coca Cola',
      status: 6,
      employees: [
        {
          name: 'Sprite',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/15?set=set4&size=100x100',
        },
        {
          name: 'Fanta',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/16?set=set4&size=100x100',
        },
      ],
    },
    {
      id: 8,
      name: 'Proyecto8',
      description: 'Este es el proyecto 8',
      clientName: 'Pepsi',
      status: 7,
      employees: [
        {
          name: 'Mirinda',
          role: 'Empleado',
          imageSrc: 'https://robohash.org/17?set=set4&size=100x100',
        },
        {
          name: '7Up',
          role: 'Practicante',
          imageSrc: 'https://robohash.org/18?set=set4&size=100x100',
        },
        {
          name: 'Pepsi',
          role: 'Jefe',
          imageSrc: 'https://robohash.org/19?set=set4&size=100x100',
        }
      ],
    }
  ]

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const projectId = queryParams.get('projectId');

  const [selectedProject, setSelectedProject] = useState(
    projects.find((project) => project.id === Number(projectId)) || projects[0]
  );

  const [role, setRole] = useState('Empleado')

  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-bold flex items-start">
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
        <Combobox
          items={['Empleado', 'Practicante', 'Jefe', 'Ventas', 'Logistica']}
          getValue={(r) => r}
          getLabel={(r) => r}
          getRealValue={(r) => r}
          onSelection={(r) => {
            setRole(r)
          }}
          itemName={'Rol'}
        />
      </div>
      {
        selectedProject ? (
          <>
            <ProjectView project={selectedProject} />
            <ProjectActions project={selectedProject} role={role}/>
          </>
        ) : null
      }
    </div>
  )
}
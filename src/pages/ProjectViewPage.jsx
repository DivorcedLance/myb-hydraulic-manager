import { Combobox } from '../components/ComboBox'
import { ProjectView } from '@/components/ProjectView'
import { ProjectActions } from '@/components/ProjectFlowActions/ProjectActions'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function ProjectViewPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/myb-hydraulic-manager/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading the projects:', error));
  }, []);

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
          items={['Empleado', 'Jefe', 'Ventas']}
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
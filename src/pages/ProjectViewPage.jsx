import { Combobox } from '../components/ComboBox'
import { ProjectView } from '@/components/ProjectView'
import { ProjectActions } from '@/components/ProjectFlowActions/ProjectActions'
import { useEffect, useState } from 'react';
import useStore from '@/store/useStore';

export function ProjectViewPage() {

  const [projects, setProjects] = useState([]);
  const { currentProjectId, currentRole } = useStore()
  
  useEffect(() => {
    fetch('/myb-hydraulic-manager/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading the projects:', error));
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (currentProjectId) {
      setSelectedProject(projects.find(p => p.id === currentProjectId))
    }
  }, [currentProjectId, projects])

  return (
    <div className="flex flex-col gap-3">
      {/* <div className="text-2xl font-bold flex items-start">
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
      </div> */}
      {
        selectedProject ? (
          <>
            <ProjectView project={selectedProject} />
            <ProjectActions project={selectedProject} role={currentRole}/>
          </>
        ) : null
      }
    </div>
  )
}
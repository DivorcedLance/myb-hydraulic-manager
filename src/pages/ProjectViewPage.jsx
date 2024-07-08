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
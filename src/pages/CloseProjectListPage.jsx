import { ProjectList } from '@/components/ProjectList'
import { useEffect, useState } from 'react';

export function CloseProjectListPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/myb-hydraulic-manager/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading the projects:', error));
  }, []);

  return (
    <div>
      <ProjectList projects={projects.filter(
        (project) => project.status === 8
      )} />
    </div>
  )
}

import { ProjectList } from '@/components/ProjectList'
import { useEffect, useState } from 'react';

export function ProjectListPage() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/myb-hydraulic-manager/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading the projects:', error));
  }, []);

  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  )
}

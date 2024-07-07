import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { PictureCard } from './PictureCard'
import { ReplacementList } from './ReplacementList'
import { DocumentList } from './DocumentList'
import { ProjectHeader } from './ProjectHeader'

export function ProjectSeeMoreModal({ project }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Ver más</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] sm:max-h-[800px] flex flex-col">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full h-full items-center gap-6 overflow-y-scroll no-scrollbar">
          <section className='w-full flex flex-col gap-2'>
            <ProjectHeader project={project} showSeeMore={false} />
            <p>{project.description}</p>
          </section>
          <section className="h-full w-full flex flex-col">
            <h2 className="text-2xl font-bold self-start">Documentos</h2>
            {project.documents && project.documents.length > 0 ? (
              <DocumentList documents={project.documents} />
            ) : (
              <p>Todavía no hay documentos</p>
            )}
          </section>
          <section className="h-full w-full flex flex-col">
            <h2 className="text-2xl font-bold">Repuestos</h2>
            {project.replacements && project.replacements.length > 0 ? (
              <ReplacementList replacements={project.replacements} />
            ) : (
              <p>No requiere repuestos</p>
            )}
          </section>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

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
import { FormFile } from './FormFile'
import uploadIcon from '@/assets/upload-icon.svg'

export function FileInputModal({ fileName = 'Archivo' }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <img src={uploadIcon} alt="Arrow" className="w-8 h-8 mr-4" />
          {`Subir ${fileName}`}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] sm:max-h-[800px] flex flex-col">
        <DialogHeader>
          <DialogTitle>{`Subir ${fileName}`}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col w-full h-full items-center gap-6">
          <FormFile />
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

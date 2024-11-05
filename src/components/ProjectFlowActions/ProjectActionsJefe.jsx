import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FileInputModal } from "../FileInputModal"
import { ReplacementsModal } from "../ReplacementsModal"
import { ResultadosVerificar } from "@/components/temp/ResultadosVerificar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react"
import { Textarea } from "../ui/textarea"

export function ProjectActionsJefe({ project }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [detalles, setDetalles] = useState(
    "Loperm ipsum dolor sit amet, consectetur adipiscing elit"
  );

  return (
    (project.status == 0) ? (
      <ReplacementsModal replacements={project.replacements} />
    ) : (project.status == 1) ? (
      <div>
        <Link to="/asignarTarea">
          <Button className="w-full">Asignar Tarea de Reparación</Button>
        </Link>
      </div>
    ) : (project.status == 3) ? (
      <>
        <div className="flex flex-col">
          <ResultadosVerificar />
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-4">Verificar Reparación</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] sm:max-h-[800px]">
              <DialogHeader>
                <DialogTitle>Rechazar Reparación</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <div className="h-96 overflow-y-auto">
                  <ResultadosVerificar fail />
                </div>
                <h2 className="font-bold">Detalles/Sugerencias</h2>
                <Textarea
                  value={detalles}
                  onChange={setDetalles}
                  className="h-32 overflow-auto"
                />
                <div className="flex flex-row gap-x-4">
                  <Button className="mt-4 w-full">Enviar Rechazo</Button>
                  <Button className="mt-4 w-full bg-red-800">Cancelar</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* <div className="flex justify-around w-full items-center">
          <div className="flex flex-row gap-4">
            <Button className="w-full bg-green-600">Aprobar Reparación</Button>
            <Link to="/recharzarReparacion">
              <Button className="w-full bg-red-700">Rechazar Reparación</Button>
            </Link>
          </div>
        </div> */}</>
    ) : (project.status == 4) ? (
      <div>
        <FileInputModal fileName="Informe de Control de Calidad" />
      </div>
    ) : (project.status == 5) ? (
      <div>
        <Link to="/asignarTarea">
          <Button className="w-full">Asignar Tarea de Pintado y Embalaje</Button>
        </Link>
      </div>
    ) : (project.status == 7) ? (
      <div className="flex justify-around w-full items-center">
        <FileInputModal fileName="Informe de Ventas" />
      </div>
    ) : null
  )
}
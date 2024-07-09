import { FileInputModal } from "./FileInputModal";
import { useRejected } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Combobox } from "@/components/ComboBox";

import { useState } from "react";

export function ReparandoView() {
  const { rejected, setRejected } = useRejected();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pruebas, setPruebas] = useState(
    "Loperm ipsum dolor sit amet, consectetur adipiscing elit"
  );
  const [detalles, setDetalles] = useState(
    "Loperm ipsum dolor sit amet, consectetur adipiscing elit"
  );

  return (
    <div className="flex flex-col gap-4">
      <Combobox
        items={["Rechazado", "No enviado"]}
        getValue={(r) => r}
        getLabel={(r) => r}
        getRealValue={(r) => r}
        onSelection={(r) => {
          if (r === "Rechazado") {
            setRejected(true);
          } else {
            setRejected(false);
          }
        }}
        itemName={"Estado"}
      />
      {rejected && (
        <div className="flex justify-center items-center gap-4 w-full">
          <p className="font-bold">Informe de pruebas fallidas</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Ver Informe</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] sm:max-h-[800px]">
              <DialogHeader>
                <DialogTitle>Informe de Pruebas Rechazado</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-full">
                  <h2 className="font-bold">Pruebas Fallidas</h2>
                  <div className="h-32 overflow-auto">{pruebas}</div>
                </div>
                <div className="h-full">
                  <h2 className="font-bold">Detalles/Sugerencias</h2>
                  <div className="h-32 overflow-auto">{detalles}</div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div className="flex justify-around w-full items-center">
        <div className="flex flex-col">
          <FileInputModal fileName="Reporte de pruebas" />
        </div>
        <div className="flex flex-col">
          <FileInputModal fileName="Reporte de pruebas de reparación" />
        </div>
      </div>
    </div>
  );
}

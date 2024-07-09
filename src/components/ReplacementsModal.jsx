import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReplacementCard } from "@/components/ReplacementCard";
import { useState } from "react";
import { useAssign } from "@/store/useStore";
import { Combobox } from "@/components/ComboBox";

export function ReplacementsModal({ replacements }) {
  const { available, setAvaible } = useAssign((state) => state);
  const [isReplacementsAvailable, setIsReplacementsAvailable] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Combobox
        items={["Disponibles", "Pedidos", "No disponibles"]}
        getValue={(r) => r}
        getLabel={(r) => r}
        getRealValue={(r) => r}
        onSelection={(r) => {
          setAvaible(r);
        }}
        itemName={"Estado"}
      />
      <div className="flex justify-center items-center gap-4 w-full">
        <p
          className={`font-bold ${
            available === "Disponibles" || available === "Pedidos"
              ? "text-green-500"
              : "text-red-600"
          }`}
        >
          {available === "Disponibles" && "Repuestos disponibles"}
          {available === "Pedidos" && "Esperando repuestos"}
          {available === "No disponibles" && "Repuestos no disponibles"}
        </p>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Ver Respuestos</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] sm:max-h-[800px]">
            <DialogHeader>
              <DialogTitle>Repuestos Faltantes</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="flex flex-col w-full items-center">
              {replacements.map((replacement) => (
                <ReplacementCard
                  key={replacement.id}
                  name={replacement.name}
                  description={replacement.description}
                  imgSrc={replacement.imgSrc}
                  currentAmount={replacement.amountNeeded}
                  // TODO: use function to calculate total amount
                  totalAmount={replacement.amountNeeded}
                />
              ))}
            </div>
            <DialogFooter>
              {available === "No disponibles" && (
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => {
                    // TODO: send request to backend to order replacements
                    setIsDialogOpen(false);
                  }}
                >
                  Pedir
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Button disabled={available !== "Disponibles"} className="w-full">
        Asignar repuestos
      </Button>
    </div>
  );
}

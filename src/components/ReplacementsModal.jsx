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
import { ReplacementCard } from '@/components/ReplacementCard'
import { useState } from 'react'

export function ReplacementsModal({ replacements}) {

  const [isReplacementsAvailable, setIsReplacementsAvailable] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className='flex justify-center items-center gap-4 w-full'>
        <p className={`font-bold ${isReplacementsAvailable ? "text-green-500" : "text-red-600"}`}>{isReplacementsAvailable ? "Repuestos completos" : "Hay repuestos faltantes"}</p>
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
              {!isReplacementsAvailable&&<Button type="submit" className="w-full" onClick={
                () => {
                  // TODO: send request to backend to order replacements
                  setIsDialogOpen(false)
                }
              }>
                Pedir
              </Button>}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Button disabled={!isReplacementsAvailable} className="w-full">Asignar repuestos</Button>
    </div>
  )
}

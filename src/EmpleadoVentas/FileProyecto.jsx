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
import { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import uploadIcon from "@/assets/upload-icon.svg";

export function FileProyecto({ onAddProforma, manualError, fr }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancel = () => {
    fr.setValue("fileName", undefined);
    fr.setValue("filedescription", undefined);
    fr.setValue("file", undefined);
    setIsDialogOpen(false);
  };

  const handleSubirFile = () => {
    if (fr.watch("fileName") === "") {
      fr.setError("fileName", {
        type: "manual",
        message: "Deba añadir un nombre al archivo",
      });
    }

    if (fr.watch("file").length <= 0) {
      fr.setError("file", {
        type: "manual",
        message: "Deba añadir una proforma",
      });
    } else {
      setIsDialogOpen(false);
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <img src={uploadIcon} alt="Arrow" className="w-8 h-8 mr-4" />
          {"Subir Proforma"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] sm:max-h-[800px] flex flex-col">
        <DialogHeader>
          <DialogTitle>{"Subir proforma"}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col px-4 w-full gap-2">
          <FormField
            control={fr.control}
            name="fileName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="fileName">Nombre del Archivo</FormLabel>
                <Input {...field} id="fileName" />
                <FormMessage error={fr.formState.errors.fileName} />
              </FormItem>
            )}
          />

          <FormField
            control={fr.control}
            name="filedescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="filedescription">Descipción</FormLabel>
                <Input {...field} id="filedescription" />
                <FormMessage error={fr.formState.errors.filedescription} />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Input
              className={"w-96 h-16 items-center text-lg"}
              type="file"
              {...fr.register("file", { required: true })}
            />
          </div>
          {fr.formState.errors.file && (
            <div className="flex justify-center">
              <span className="text-red-600">
                {fr.formState.errors.file.message}
              </span>
            </div>
          )}
          {/* {manualError[2] && (
            <span className="text-red-600">Deba añadir una proforma</span>
          )} */}

          <Button type="button" onClick={handleSubirFile}>
            Subir
          </Button>
          <Button type="button" className="bg-red-900" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

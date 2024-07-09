import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const FormFileSchema = z.object({
  fileName: z.string().min(1, {
    message: "El nombre del archivo es requerido",
  }),
  description: z.string().optional(),
  file: z.any().refine((file) => file.length > 0, {
    message: "El archivo es requerido",
  }),
});

export function FormFile({ onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FormFileSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (onCancel) onCancel(); //Es para cerrar el modal
  };

  const handleCancel = () => {
    reset();
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="font-semibold" htmlFor="fileName">
          Nombre del archivo
        </label>
        <Input id="fileName" {...register("fileName")} />
        {/*         <input id="fileName" {...register('fileName')} />
         */}
        {errors.fileName && (
          <span className="text-red-600">{errors.fileName.message}</span>
        )}
      </div>

      <div className="mt-2">
        <label className="font-semibold" htmlFor="description">
          Descripción del archivo
        </label>
        <Input id="description" {...register("description")} />
        {errors.description && (
          <span className="text-red-600">{errors.description.message}</span>
        )}
      </div>

      <div className="mt-2">
        <label className="font-semibold" htmlFor="file">
          Subir documento
        </label>
        <Input type="file" {...register("file")} />
        {errors.file && (
          <span className="text-red-600">{errors.file.message}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-3">
        <Button type="submit">Subir</Button>
        <Button type="button" className="bg-red-800" onClick={handleCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/button';

const FormFileSchema = z.object({
  fileName: z.string().min(1, {
    message: "El nombre del archivo es requerido",
  }),
  description: z.string().optional(),
  file: z.any().refine(val => val.length > 0, "Archivo requerido"),
});

export function FormFile() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(FormFileSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fileName">Nombre del archivo</label>
        <input id="fileName" {...register('fileName')} />
        {errors.fileName && <span>{errors.fileName.message}</span>}
      </div>

      <div>
        <label htmlFor="description">Descripción del archivo</label>
        <input id="description" {...register('description')} />
      </div>

      <div>
        <label htmlFor="file">Subir documento</label>
        <input type="file" id="file" {...register('file')} />
      </div>

      <Button type="submit">Confirmar</Button>
      <Button type="button" onClick={handleCancel}>Cancelar</Button>
    </form>
  );
}
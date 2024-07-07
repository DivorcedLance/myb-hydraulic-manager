import { Input } from "@/components/ui/input";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function FormRegistro({ fr }) {
  return (
    <div>
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Cliente
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FormField
          control={fr.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Input {...field} id="nombre" />
              <FormMessage error={fr.formState.errors.nombre} />
            </FormItem>
          )}
        />
        <FormField
          control={fr.control}
          name="nroDocumento"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nroDocumento">Numero de Documento</FormLabel>
              <Input {...field} id="nrodocumento" />
              <FormMessage error={fr.formState.errors.nroDocumento} />
            </FormItem>
          )}
        />
        <FormField
          control={fr.control}
          name="ruc"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="ruc">RUC</FormLabel>
              <Input {...field} id="ruc" />
              <FormMessage error={fr.formState.errors.ruc} />
            </FormItem>
          )}
        />
      </div>

      
    </div>
  );
}

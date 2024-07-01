import { Input } from "@/components/ui/input";
import { TextareaWithLabel } from "@/components/TextAreaWhitLabel";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function FormRegistro({ fr, onChange, manualError }) {
  return (
    <div>
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Cliente
      </h1>
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

      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Proyecto
      </h1>
      <FormLabel
        htmlFor="ruc"
        className={`${manualError[1] && "text-red-600"}`}
      >
        Descripcion
      </FormLabel>
      <TextareaWithLabel
        placeholder="Ingrese sus detalles"
        id="descripcion"
        onChange={(e) => onChange(e)}
      />
      {manualError[1] && (
        <span className="text-red-600">
          Deba añadir almenos un a descripcion
        </span>
      )}
    </div>
  );
}

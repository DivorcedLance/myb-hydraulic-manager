import { Input } from "@/components/ui/input";
import { TextareaWithLabel } from "@/components/TextAreaWhitLabel";

export function FormRegistro() {
  return (
    <div>
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Cliente
      </h1>
      <Input title="Nombre" placeholder="Ingrese su nombre" id="nombre" />
      <Input
        title="NroDocumento"
        placeholder="Ingrese su Nro Documento"
        id="nrodocumento"
      />
      <Input title="RUC" placeholder="Ingrese su RUC" id="ruc" />
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Proyecto
      </h1>
      <TextareaWithLabel
        title="Descripcion"
        placeholder="Ingrese sus detalles"
        id="descripcion"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

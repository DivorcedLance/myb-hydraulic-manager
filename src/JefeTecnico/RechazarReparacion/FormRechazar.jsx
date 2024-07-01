import { TextareaWithLabel } from "@/components/TextAreaWhitLabel";
export function FormRechazar({ fields, onChange }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="h-full">
          <TextareaWithLabel
            title="Pruebas Fallidas"
            placeholder="Ingrese detalles de las pruebas fallidas"
            id="pruebas_fallidas"
            value={fields.pruebas_fallidas}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="h-full">
          <TextareaWithLabel
            title="Detalles / Sugerencias"
            placeholder="Ingrese sus detalles o sugerencias"
            id="detalles_sugerencias"
            value={fields.detalles_sugerencias}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
    </>
  );
}

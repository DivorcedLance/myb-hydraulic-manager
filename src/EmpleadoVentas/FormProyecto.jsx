import { FormLabel } from "@/components/ui/form";
import { TextareaWithLabel } from "@/components/TextAreaWhitLabel";
import ListaRepuestos from "@/EmpleadoVentas/ListaRepuestos";
import { StockRepuestos } from "@/EmpleadoVentas/StockRepuestos";
import { Button } from "@/components/ui/button";

export function FormProyecto({
  onChange,
  manualError,
  added,
  repuestos,
  onDelete,
  onCantity,
  onAddRepuesto,
  handleAdd,
  onSelected,
  open,
  onClose,
}) {
  return (
    <div className="py-4">
      <h1 className="text-2xl pb-2 text-left font-medium leading-none">
        Proyecto
      </h1>
      <div className="grid md:grid-cols-2 gap-4 py-1">
        <div>
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
        <div>
          <FormLabel
            htmlFor="repuestos"
            className={`${manualError[0] && "text-red-600"}`}
          >
            Lista de Repuestos
          </FormLabel>
          <ListaRepuestos
            added={added}
            onDelete={onDelete}
            onEdit={onCantity}
          />
          {manualError[0] && (
            <span className="text-red-600">
              Deba añadir al menos un repuesto
            </span>
          )}
          <Button className="w-full mt-2" onClick={onAddRepuesto} type="button">
            Añadir
          </Button>
        </div>

        <StockRepuestos
          isOpen={open}
          stock={repuestos}
          onClose={onClose}
          onSelected={onSelected}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

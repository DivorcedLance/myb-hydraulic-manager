import { FormLabel, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextareaWithLabel } from "@/components/TextAreaWhitLabel";
import ListaRepuestos from "@/EmpleadoVentas/ListaRepuestos";
import { StockRepuestos } from "@/EmpleadoVentas/StockRepuestos";
import { Button } from "@/components/ui/button";

export function FormProyecto({
  fr,
  repuestos,
  onDelete,
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
          <FormField
            control={fr.control}
            name="titulo"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel htmlFor="titulo">Titulo</FormLabel>
                  <Input {...field} id="titulo" />
                  <FormMessage error={fr.formState.errors.titulo} />
                </FormItem>
              </FormItem>
            )}
          />
          <FormField
            control={fr.control}
            name="descripcion"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="descripcion">Descripción</FormLabel>
                <TextareaWithLabel
                  placeholder="Ingrese sus detalles"
                  id="descripcion"
                  onChange={(e) => field.onChange(e)}
                />
                <FormMessage error={fr.formState.errors.descripcion} />
              </FormItem>
            )}
          />
        </div>
        <div>
          <FormField
            control={fr.control}
            name="repuestos"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="repuestos"
                >
                  Lista de Repuestos
                </FormLabel>
                <ListaRepuestos
                  fields={field.value}
                  fr={fr}
                  onDelete={onDelete}
                />
                <FormMessage error={fr.formState.errors.repuestos} />
              </FormItem>
            )}
          />
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

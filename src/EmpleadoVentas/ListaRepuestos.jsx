import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/Card";
import { Counter } from "@/components/RepuestoCard2/Counter";

export default function ListaRepuestos({ fields, fr, onDelete }) {
  return (
    <div className="mx-3 overflow-y-auto" style={{ height: "40h" }}>
      {fields.length === 0 ? (
        <p>No hay repuestos añadidos</p>
      ) : (
        fields.map((item, index) => (
          <div key={item.repuestoId} className="relative">
            <div className="col-span-6 pt-2 flex">
              <CardDemo
                title={item.name}
                subtitle={item.description}
                image={item.imgSrc}
                imageAlt={item.name}
              >
                <Counter
                  {...fr.register(`repuestos.${index}.quantity`, { required: true })}
                />
              </CardDemo>
            </div>
            <Button
              className="absolute right-0 top-0 z-50"
              onClick={() => {
                onDelete(item.repuestoId);
              }}
              type="button"
            >
              &times;
            </Button>
          </div>
        ))
      )}
    </div>
  );
}

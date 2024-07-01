import { CardWithCounter } from "@/components/CardWithCounter";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";

export default function ListaRepuestos({ added, onDelete }) {
  return (
    <div className="mx-3 overflow-y-auto" style={{ height: "40vh" }}>
      {added.length === 0 ? (
        <p>No hay repuestos añadidos</p>
      ) : (
        added.map((item) => (
          <div key={item.id} className="grid grid-cols-4">
            <div className="col-span-3">
              <CardWithCounter
                title={item.name}
                subtitle={item.description}
                image={item.imgSrc}
                imageAlt={item.name}
              />
            </div>
            <Button
              className="col-span-1 my-auto"
              onClick={() => {
                onDelete(item.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        ))
      )}
    </div>
  );
}

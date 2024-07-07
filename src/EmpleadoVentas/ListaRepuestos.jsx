<<<<<<< HEAD
import { CardWithCounter } from "@/components/RepuestoCard2/CardWithCounter";
import { Button } from "@/components/ui/button";
=======
import { Button } from "@/components/ui/button";
import { CardDemo } from "@/components/Card";
import { Counter } from "@/components/Counter";
>>>>>>> e694b5cf1364358c752687a3951104404820b449

export default function ListaRepuestos({ added, onDelete, onEdit }) {
  return (
    <div className="mx-3 overflow-y-auto" style={{ height: "40vh" }}>
      {added.length === 0 ? (
        <p>No hay repuestos añadidos</p>
      ) : (
        added.map((item) => (
          <div key={item.id} className="relative">
            <div className="col-span-6 pt-2 flex">
                <CardDemo
                  title={item.name}
                  subtitle={item.description}
                  image={item.imgSrc}
                  imageAlt={item.name}
                >
                  <Counter
                    id={item.id}
                    initValue={item.quantity}
                    onChange={onEdit}
                  />
                </CardDemo>
            </div>
            <Button
              className="absolute right-0 top-0 z-50"
              onClick={() => {
                onDelete(item.id);
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

import { CardDemo } from "@/components/Card";
import { Modal } from "@/components/Modal";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function StockRepuestos({ stock, onAdd, onSelected, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Stock de Repuestos
      </h1>
      <div className="overflow-auto" style={{ height: "70vh" }}>
        {stock.map((repuesto) => (
          <CardDemo
            key={repuesto.id}
            title={repuesto.name}
            subtitle={repuesto.description}
            image={repuesto.imgSrc}
            imageAlt={repuesto.name}
          >
            <Switch
              key={repuesto.id}
              onClick={() => {
                onSelected(repuesto.id);
              }}
            />
          </CardDemo>
        ))}
      </div>
      <Button className="w-full mt-2" onClick={onAdd} type="button">
        Agregar
      </Button>
    </Modal>
  );
}

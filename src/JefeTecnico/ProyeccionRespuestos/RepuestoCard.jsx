<<<<<<< HEAD
import { CardWithSwitchCounter } from "@/components/RepuestoCard2/CardWithSwitchCounter";

// key={repuesto.id}
// id={repuesto.id}
// title={repuesto.name}
// subtitle={repuesto.descripcion}
// cantidad={cantidades.find((e) => e.id === repuesto.id)?.count}
// onChange={onChange}
// onSelected={onSelected}
// imageAlt={repuesto.imgSrc}
=======
import { CardDemo } from "@/components/Card";
import { Counter } from "@/components/Counter";
import { Switch } from "@/components/ui/switch";
>>>>>>> e694b5cf1364358c752687a3951104404820b449

export function RepuestoCard({ onSelected, onEdit, item, selected }) {
  return (
    <CardDemo
      title={item.name}
      subtitle={item.descripcion}
      image={item.imgSrc}
      imageAlt={item.name}
    >
      <Counter
        className={"max-w-20"}
        id={item.id}
        initValue={item.quantity}
        onChange={onEdit}
      />
      <Switch
        id={item.id}
        checked={selected.includes(item.id)}
        onClick={() => onSelected(item.id)}
      />
    </CardDemo>
  );
}

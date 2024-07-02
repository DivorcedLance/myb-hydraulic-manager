import { CardDemo } from "@/components/Card";
import { Counter } from "@/components/Counter";
import { Switch } from "@/components/ui/switch";

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

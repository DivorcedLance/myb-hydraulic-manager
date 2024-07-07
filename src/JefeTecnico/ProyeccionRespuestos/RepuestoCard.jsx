import { CardWithSwitchCounter } from "@/components/RepuestoCard2/CardWithSwitchCounter";

// key={repuesto.id}
// id={repuesto.id}
// title={repuesto.name}
// subtitle={repuesto.descripcion}
// cantidad={cantidades.find((e) => e.id === repuesto.id)?.count}
// onChange={onChange}
// onSelected={onSelected}
// imageAlt={repuesto.imgSrc}

export function RepuestoCard({
  onSelected,
  onChange,
  id,
  cantidad,
  ...props
}) {
  return (
    <CardWithSwitchCounter
      {...props}
      onToggle={() => onSelected(id)}
      onChange={(e) => onChange(id, e.target.value)}
      countervalue={cantidad}
    />
  );
}

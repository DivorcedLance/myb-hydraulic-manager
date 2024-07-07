import { RepuestoCard } from "./RepuestoCard";

export function RepuestoSection({
  repuestos,
  cantidades,
  onChange,
  onSelected,
}) {
  return (
    <div>
      {repuestos.map((repuesto) => (
        <RepuestoCard
          key={repuesto.id}
          id={repuesto.id}
          title={repuesto.name}
          subtitle={repuesto.descripcion}
          cantidad={cantidades.find((e) => e.id === repuesto.id)?.count}
          onChange={onChange}
          onSelected={onSelected}
          imageAlt={repuesto.imgSrc}
        />
      ))}
    </div>
  );
}

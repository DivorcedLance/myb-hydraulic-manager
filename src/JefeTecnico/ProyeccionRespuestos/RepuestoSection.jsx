import { RepuestoCard } from "./RepuestoCard";

export function RepuestoSection({ repuestos, onEdit, onSelected, onDelete, selected }) {

  return (
    <div className="grid grid-cols-2">
      {repuestos.map((repuesto) => (
        <RepuestoCard
          key={repuesto.id}
          onSelected={onSelected}
          onEdit={onEdit}
          onDelete={onDelete}
          item={repuesto}
          selected={selected}
        />
      ))}
  
    </div>
  );
}

import { RepuestoCard } from "./RepuestoCard";

export function RepuestoSection({ repuestos, onEdit, onSelected, onDelete, selected }) {

  return (
    <div className="grid grid-cols-2">
      {repuestos.map((repuesto) => (
        <RepuestoCard
          key={repuesto.id}
<<<<<<< HEAD
          id={repuesto.id}
          title={repuesto.name}
          subtitle={repuesto.descripcion}
          cantidad={cantidades.find((e) => e.id === repuesto.id)?.count}
          onChange={onChange}
          onSelected={onSelected}
          imageAlt={repuesto.imgSrc}
=======
          onSelected={onSelected}
          onEdit={onEdit}
          onDelete={onDelete}
          item={repuesto}
          selected={selected}
>>>>>>> e694b5cf1364358c752687a3951104404820b449
        />
      ))}
  
    </div>
  );
}

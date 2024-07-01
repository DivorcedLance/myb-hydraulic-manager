import { RepuestoSection } from "@/JefeTecnico/ProyeccionRespuestos/RepuestoSection";
import { useState } from "react";

const reps = [
  {
    id: 1,
    name: "Llanta",
    descripcion: "Llanta para auto",
    imgSrc: "https://via.placeholder.com/150",
    count: 4,
  },
  {
    id: 2,
    name: "Aceite",
    descripcion: "Aceite para motor",
    imgSrc: "https://via.placeholder.com/150",
    count: 6,
  },
  {
    id: 3,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
    imgSrc: "https://via.placeholder.com/150",
    count: 9,
  },
];

export function ProyeccionRepuestos() {
  const [repuestos, setRepuestos] = useState(reps);

  /*
    {
        id, count
    }
  */

  const [selected, setSelected] = useState(
    reps.map((e) => {
      return {
        id: e.id,
        count: e.count,
      };
    })
  );

  const [pedidos, setPedidos] = useState([]);

  const handleSelect = (id) => {
    if (pedidos.includes(id)) {
      setPedidos(pedidos.filter((e) => e !== id));
    } else {
      setPedidos([...selected, id]);
    }
  };

  const handleModify = (id, count) => {
    const found = selected.find((e) => e?.id === id);
    if (found) {
      const newSelected = selected.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            count: count,
          };
        }
        return e;
      });
      setSelected(newSelected);
    } else {
      setSelected([...selected, { id, count }]);
    }
  };

  const handlePedir = () => {
    console.log(pedidos);
  };
  return (
    <div>
      <RepuestoSection
        repuestos={repuestos}
        cantidades={selected}
        onChange={handleModify}
        onSelected={handleSelect}
      />
      <button onClick={handlePedir}>Pedir</button>
    </div>
  );
}

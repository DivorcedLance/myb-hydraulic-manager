import { RepuestoSection } from "@/JefeTecnico/ProyeccionRespuestos/RepuestoSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const reps = [
  {
    id: 1,
    name: "Llanta",
    descripcion: "Llanta para auto",
<<<<<<< HEAD
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    count: 4,
=======
    imgSrc: "https://robohash.org/1?set=set4&size=100x100",
    quantity: 0,
>>>>>>> e694b5cf1364358c752687a3951104404820b449
  },
  {
    id: 2,
    name: "Aceite",
    descripcion: "Aceite para motor",
<<<<<<< HEAD
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    count: 6,
=======
    imgSrc: "https://robohash.org/2?set=set4&size=100x100",
    quantity: 0,
>>>>>>> e694b5cf1364358c752687a3951104404820b449
  },
  {
    id: 3,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
<<<<<<< HEAD
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    count: 9,
=======
    imgSrc: "https://robohash.org/3?set=set4&size=100x100",
    quantity: 0,
>>>>>>> e694b5cf1364358c752687a3951104404820b449
  },
];

export function ProyeccionRepuestos() {
  //Repuestos con la cantidad recomendada por ventas
  const [repuestos, setRepuestos] = useState(reps);
<<<<<<< HEAD
  const [selected, setSelected] = useState(
    reps.map((e) => {
      return {
        id: e.id,
        count: e.count,
      };
    })
  );

  const [pedidos, setPedidos] = useState([]);

=======
  //Repuestos seleccionados por el jefe tecnico
  const [selected, setSelected] = useState([]);

  //Modificar la cantidad de un repuesto
  const handleModify = (e) => {
    const id = Number(e.target.id);
    const value = Number(e.target.value);
    if (value < 0) return;
    setRepuestos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };
  //Seleccionar un repuesto
>>>>>>> e694b5cf1364358c752687a3951104404820b449
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
      return;
    }
    setSelected((prev) => [...prev, id]);
  };

  //Pedir repuestos
  const handlePedir = () => {
    console.log("Pedir repuestos");
    const pedidos = repuestos.filter((item) => selected.includes(item.id));
    console.log(pedidos);
  };

  const handleCancelar = () => {
    console.log("Cancelar");
    setSelected([]);
    setRepuestos((prev) => prev.map((item) => ({ ...item, quantity: 0 })));
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl pb-4 text-left font-medium leading-none">
        Proyección de Repuestos
      </h1>
      <div style={{ height: "70vh" }}>
        <RepuestoSection
          repuestos={repuestos}
          onEdit={handleModify}
          onSelected={handleSelect}
          selected={selected}
        />
      </div>
      <Button className="w-full mt-2" onClick={handlePedir}>
        Pedir
      </Button>
      <Button className="w-full mt-2 bg-red-700" onClick={handleCancelar}>
        Cancelar
      </Button>
    </div>
  );
}
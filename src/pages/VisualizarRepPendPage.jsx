import { RepuestoSection } from "@/JefeTecnico/ProyeccionRespuestos/RepuestoSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const reps = [
  {
    id: 1,
    name: "Llanta",
    descripcion: "Llanta para auto",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 4,
  },
  {
    id: 2,
    name: "Aceite",
    descripcion: "Aceite para motor",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 6,
  },
  {
    id: 3,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 9,
  },
  {
    id: 4,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 9,
  },
  {
    id: 5,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 9,
  },
  {
    id: 6,
    name: "Filtro de aire",
    descripcion: "Filtro de aire para motor",
    imgSrc: "https://e7.pngegg.com/pngimages/932/804/png-clipart-power-take-off-mack-trucks-spare-part-hydraulic-pump-power-take-off-truck-auto-part.png",
    quantity: 9,
  },
];


//Repuestos con la cantidad recomendada por ventas
export default function VisualizarRepPendPage() {
  const [repuestos, setRepuestos] = useState(reps);
  const [selected, setSelected] = useState(
    reps.map((e) => {
      return {
        id: e.id,
        count: e.count,
      };
    })
  );

  const navigate = useNavigate();


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
  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected((prev) => prev.filter((item) => item !== id));
      return;
    }
    setSelected((prev) => [...prev, id]);
  };

  //Pedir repuestos
  const handleConseguir = () => {
    console.log("Pedir repuestos");
    navigate("/");
  };

  const handleCancelar = () => {
    console.log("Cancelar");
    setSelected([]);
    setRepuestos((prev) => prev.map((item) => ({ ...item, quantity: 0 })));
    navigate("/");
  };

  return (
    <div className="h-full">
      <h1 className="text-2xl pb-4 text-left font-medium leading-none">
        Visualización de repuestos pendientes
      </h1>
      <div className="overflow-auto" style={{ height: "70vh" }}>
        <RepuestoSection
          repuestos={repuestos}
          onEdit={handleModify}
          onSelected={handleSelect}
          selected={selected}
        />
      </div>
      <Button className="w-full mt-2" onClick={handleConseguir}>
        Marcar como conseguido
      </Button>
      <Button className="w-full mt-2 bg-red-700" onClick={handleCancelar}>
        Cancelar
      </Button>
    </div>
  );
}

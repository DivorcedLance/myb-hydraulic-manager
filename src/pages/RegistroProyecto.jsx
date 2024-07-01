import { FormRegistro } from "@/EmpleadoVentas/FormRegistro";
import ListaRepuestos from "@/EmpleadoVentas/ListaRepuestos";
import { StockRepuestos } from "@/EmpleadoVentas/StockRepuestos";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const repuestosDB = [
  {
    id: 1,
    name: "Llanta",
    description: "Llanta para auto",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Bomba",
    description: "Bomba de agua para auto",
    imgSrc: "https://via.placeholder.com/160",
  },
  {
    id: 3,
    name: "Manguera",
    description: "Manguera para bomba",
    imgSrc: "https://via.placeholder.com/170",
  },
];

export function RegistroProyecto() {
  const [repuestos, setRepuestos] = useState(repuestosDB);
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState([]);
  const [open, setOpen] = useState(false);

  const onSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleAdd = () => {
    const newAdded = repuestos.filter((item) => selected.includes(item.id));
    setAdded([...added, ...newAdded]);
    setSelected([]);
    setRepuestos(repuestos.filter((item) => !selected.includes(item.id)));
    setOpen(false);
  };

  return (
    <div>
      <FormRegistro />
      <ListaRepuestos added={added} />
      <Button
        className="w-full mt-2"
        onClick={() => {
          setOpen(true);
        }}
      >
        Añadir
      </Button>
      <StockRepuestos
        isOpen={open}
        stock={repuestos}
        onClose={() => {
          setOpen(false);
        }}
        onSelected={onSelected}
        onAdd={handleAdd}
      />
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Proforma Reparacion
      </h1>
      <Input title="proforma" type="file" id="total" />
    </div>
  );
}

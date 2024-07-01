import { FormRegistro } from "@/EmpleadoVentas/FormRegistro";
import ListaRepuestos from "@/EmpleadoVentas/ListaRepuestos";
import { StockRepuestos } from "@/EmpleadoVentas/StockRepuestos";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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

const formSchema = z.object({
  nombre: z.string().min(1, {
    message: "El nombre es requerido",
  }),
  nroDocumento: z.string().min(1, {
    message: "El numero de documento es requerido",
  }),
  ruc: z.string().min(1, {
    message: "El ruc es requerido",
  }),
});

export function RegistroProyecto() {
  const [repuestos, setRepuestos] = useState(repuestosDB);
  const [selected, setSelected] = useState([]);
  const [added, setAdded] = useState([]);
  const [open, setOpen] = useState(false);
  const [manualError, setManualError] = useState([false, false, false]);
  // 0 -> added, 1 --> descripcion, 2 --> proforma
  const [descripcion, setDescripcion] = useState("");
  const [proforma, setProforma] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      nroDocumento: "",
      ruc: "",
    },
  });

  const modError = (index, value) => {
    setManualError((prev) => {
      const newError = [...prev];
      newError[index] = value;
      return newError;
    });
  };

  const onSubmit = (values) => {
    if (manualEvaluation(added, descripcion, proforma, modError)) {
      return;
    }

    console.log(values);
  };

  const onSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleAdd = () => {
    if (manualError[0] === true) modError(0, false);
    const newAdded = repuestos.filter((item) => selected.includes(item.id));
    setAdded([...added, ...newAdded]);
    setSelected([]);
    setRepuestos(repuestos.filter((item) => !selected.includes(item.id)));
    setOpen(false);
  };

  const handleDelete = (id) => {
    setAdded(added.filter((item) => item.id !== id));
    setSelected([]);
  };

  const handleWriteDescripcion = (e) => {
    if (manualError[1] === true && e.target.value !== "") modError(1, false);
    setDescripcion(e.target.value);
  };

  const handleAddProforma = (e) => {
    if (
      manualError[2] === true &&
      e.target.value !== null &&
      e.target.value !== ""
    )
      modError(2, false);
    setProforma(e.target.value);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormRegistro
            fr={form}
            onChange={handleWriteDescripcion}
            manualError={manualError}
          />
          <FormLabel
            htmlFor="repuestos"
            className={`${manualError[0] && "text-red-600"}`}
          >
            Lista de Repuestos
          </FormLabel>
          <ListaRepuestos added={added} onDelete={handleDelete} />
          {manualError[0] && (
            <span className="text-red-600">
              Deba añadir al menos un repuesto
            </span>
          )}
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
          <h1
            className={`text-2xl pb-6 text-left font-medium leading-none ${
              manualError[2] && "text-red-600"
            }`}
          >
            Proforma Reparacion
          </h1>
          <FormLabel
            htmlFor="proforma"
            className={`${manualError[0] && "text-red-600"}`}
          >
            Añadir proforma
          </FormLabel>
          <Input type="file" onChange={handleAddProforma} />
          {manualError[2] && (
            <span className="text-red-600">Deba añadir una proforma</span>
          )}
          <Button className="w-full mt-2" type="submit">
            Crear Proyecto
          </Button>
        </form>
      </Form>
      <Button className="w-full mt-2 bg-red-700">Cancelar</Button>
      {/* //TODO: Validaciones */}
      {/* //TODO: Boton de Cancelar */}
      {/* //TODO: Boton de Crear Proyecto */}
    </div>
  );
}

const manualEvaluation = (added, descripcion, proforma, modError) => {
  if (added.length <= 0) {
    modError(0, true);
  }
  if (descripcion === "") {
    modError(1, true);
  }
  if (proforma === null || proforma === "") {
    modError(2, true);
  }

  return added.length <= 0 || descripcion === "" || proforma === null;
};

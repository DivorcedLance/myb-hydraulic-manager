import { FormRegistro } from "@/EmpleadoVentas/FormRegistro";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormProyecto } from "@/EmpleadoVentas/FormProyecto";
import { useNavigate } from "react-router-dom";

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

export function RegistroProyecto() {
  //Stock de repuestos
  const [repuestos, setRepuestos] = useState(repuestosDB);
  //Control de la modal con el stock de repuestos
  const [open, setOpen] = useState(false);
  //Repuestos seleccionados para añadir a la lista
  const [selected, setSelected] = useState([]);
  //Repuestos añadidos a la lista
  const [added, setAdded] = useState([]);
  //Descripcion del proyecto
  const [descripcion, setDescripcion] = useState("");
  //Proforma del proyecto
  const [proforma, setProforma] = useState(null);
  //Errores en datos del proyecto no controlados por el hook-form
  const [manualError, setManualError] = useState([false, false, false]);
  // 0 -> added, 1 --> descripcion, 2 --> proforma

  const navigate = useNavigate();

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

    const data = {
      ...values,
      descripcion,
      proforma,
      repuestos: added,
    };

    console.log(data);
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
    setAdded([...added, ...newAdded.map((item) => ({ ...item, quantity: 1 }))]);
    setSelected([]);
    setRepuestos(repuestos.filter((item) => !selected.includes(item.id)));
    setOpen(false);
  };

  const handleCantity = (e) => {
    const id = Number(e.target.id);
    const value = Number(e.target.value);
    setAdded(
      added.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Number(value) };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    const removed = added.find((item) => item.id === id);
    setAdded(added.filter((item) => item.id !== id));
    setRepuestos([...repuestos, removed]);
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

  const handleCancelar = () => {
    form.reset();
    setRepuestos(repuestosDB);
    setAdded([]);
    setDescripcion("");
    setProforma(null);
    setManualError([false, false, false]);
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col min-w-min">
      <h1 className="text-2xl pb-4 text-left font-medium leading-none">
        Registrar Proyecto
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormRegistro fr={form} />
          <FormProyecto
            onChange={handleWriteDescripcion}
            manualError={manualError}
            added={added}
            repuestos={repuestos}
            onDelete={handleDelete}
            onCantity={handleCantity}
            onAddRepuesto={() => setOpen(true)}
            handleAdd={handleAdd}
            onSelected={onSelected}
            open={open}
            onClose={() => setOpen(false)}
          />
          <div className="my-2">
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
            <div className="h-20 flex justify-center">
              <Input
                className={"w-96 h-16 items-center text-lg"}
                type="file"
                onChange={handleAddProforma}
              />
              {manualError[2] && (
                <span className="text-red-600">Deba añadir una proforma</span>
              )}
            </div>
            <Button className="w-full mt-2" type="submit">
              Crear Proyecto
            </Button>
          </div>
        </form>
      </Form>
      <Button className="w-full mt-2 bg-red-700" onClick={handleCancelar}>
        Cancelar
      </Button>
    </div>
  );
}

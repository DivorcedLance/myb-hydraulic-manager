import { FormCliente } from "@/EmpleadoVentas/FormCliente";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FormProyecto } from "@/EmpleadoVentas/FormProyecto";
import { useNavigate } from "react-router-dom";
import { FileProyecto } from "@/EmpleadoVentas/FileProyecto";
import { StockPruebas } from "@/EmpleadoVentas/StockPruebas";
import { ListaPruebas } from "@/EmpleadoVentas/ListaPruebas";
const repuestosDB = [
  {
    repuestoId: "1",
    name: "Llanta",
    description: "Llanta para auto",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    repuestoId: "2",
    name: "Bomba",
    description: "Bomba de agua para auto",
    imgSrc: "https://via.placeholder.com/160",
  },
  {
    repuestoId: "3",
    name: "Manguera",
    description: "Manguera para bomba",
    imgSrc: "https://via.placeholder.com/170",
  },
];

const TIPO_PRUEBA = [
  { tipoPruebaId: "1", nombre: "Hematología" },
  { tipoPruebaId: "2", nombre: "Bioquímica" },
  { tipoPruebaId: "3", nombre: "Microbiología" },
  { tipoPruebaId: "4", nombre: "Inmunología" },
  { tipoPruebaId: "5", nombre: "Toxicología" }
];

const PARAMETRO = [
  { parametroId: "1", tipoPruebaId: "1", unidades: "10^9/L", nombre: "Glóbulos blancos" },
  { parametroId: "2", tipoPruebaId: "1", unidades: "g/dL", nombre: "Hemoglobina" },
  { parametroId: "3", tipoPruebaId: "2", unidades: "mg/dL", nombre: "Glucosa" },
  { parametroId: "4", tipoPruebaId: "2", unidades: "mmol/L", nombre: "Colesterol" },
  { parametroId: "5", tipoPruebaId: "3", unidades: "CFU/mL", nombre: "Bacterias Totales" },
  { parametroId: "6", tipoPruebaId: "3", unidades: "---", nombre: "Escherichia coli" },
  { parametroId: "7", tipoPruebaId: "4", unidades: "UI/mL", nombre: "Antígeno prostático" },
  { parametroId: "8", tipoPruebaId: "4", unidades: "---", nombre: "VIH" },
  { parametroId: "9", tipoPruebaId: "5", unidades: "µg/L", nombre: "Plomo" },
  { parametroId: "10", tipoPruebaId: "5", unidades: "µg/L", nombre: "Mercurio" }
];

const repuestoSchema = z.object({
  repuestoId: z.string(),
  name: z.string(),
  description: z.string(),
  imgSrc: z.string(),
  quantity: z.string(),
});

const especificacionSchema = z.object({
  parametroId: z.string(),
  nombre: z.string(),
  unidades: z.string(),
  valorMin: z.string(),
  valorMax: z.string(),
});

const pruebasSchema = z.object({
  tipoPruebaId: z.string(),
  nombre: z.string(),
  especificaciones: z.array(especificacionSchema)
});

const formSchema = z.object({
  titulo: z.string({
    required_error: "El titulo es requerido"
  }).min(1, {
    message: "El titulo es requerido",
    type: "too_small"
  }),
  descripcion: z.string({
    required_error: "La descripcion es requerida"
  }).min(1, {
    message: "La descripcion es requerida",
    type: "too_small"
  }),
  nombre: z.string({
    required_error: "El nombre es requerido",
  }).min(1, {
    message: "El nombre es requerido",
    type: "too_small"
  }),
  nroDocumento: z.string({
    required_error: "El numero de documento es requerido",
  }).min(1, {
    message: "El numero de documento es requerido",
    type: "too_small"
  }),
  tipoDocumento: z.enum(["dni", "c_extranjeria", "pasaporte"], {
    required_error: "El tipo de documento es requerido",
  }),
  ruc: z.string({
    required_error: "El RUC es requerido",
  }).min(1, {
    message: "El RUC es requerido",
    type: "too_small"
  }),
  pruebas: z.array(pruebasSchema).min(1, {
    message: "Debe añadir al menos una prueba",
    type: "too_small"
  }),
  repuestos: z.array(repuestoSchema).min(1, {
    message: "Debe añadir al menos un repuesto",
    type: "too_small"
  }),
});

const manualEvaluation = (added, descripcion, proforma, modError) => {
  /* if (added.length <= 0) {
    modError(0, false);
  } */

  if (descripcion === "") {
    modError(1, true);
  }
  /* if (proforma === null || proforma === "") {
    modError(2, false);
  } */

  return (
    /* added.length <= 0 ||  */ descripcion === "" /* || proforma === null */
  );
};

export function RegistroProyecto() {
  //Stock de repuestos
  const [repuestos, setRepuestos] = useState(repuestosDB);
  const [pruebas, setPruebas] = useState(TIPO_PRUEBA);
  //Control de la modal con el stock de repuestos
  const [open, setOpen] = useState(false);
  //Control de la modal con las pruebas
  const [openPruebas, setOpenPruebas] = useState(false);
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
      titulo: "",
      descripcion: "",
      repuestos: [],
      pruebas: [],
    },
  });

  const form_repuestos = useWatch({ control: form.control, name: "repuestos" });
  const form_pruebas = useWatch({ control: form.control, name: "pruebas" });
  const modError = (index, value) => {
    setManualError((prev) => {
      const newError = [...prev];
      newError[index] = value;
      return newError;
    });
  };

  const onSubmit = (values) => {
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
    const newAdded = repuestos.filter((item) => selected.includes(item.repuestoId));
    form.setValue("repuestos", [...form.watch("repuestos"), ...newAdded.map((item) => ({ ...item, quantity: 1 }))]);
    setSelected([]);
    setRepuestos(repuestos.filter((item) => !selected.includes(item.repuestoId)));
    setOpen(false);
  };

  const handleCantity = (e) => {
    const id = e.target.id;
    const value = Number(e.target.value);
    form.setValue(
      "repuestos",
      form.watch("repuestos").map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Number(value) };
        }
        return item;
      })
    );
  };

  const handleDelete = (id) => {
    const removed = form.watch("repuestos").find((item) => item.repuestoId === id);
    form.setValue("repuestos", form.watch("repuestos").filter((item) => item.repuestoId !== id));
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
    setProforma(e.target.files[0]);
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

  const handleAddPruebas = (selected) => {
    form.setValue("pruebas",
      [...form.watch("pruebas"),
      ...selected.map((item) => (
        {
          especificaciones: PARAMETRO.filter((parametro) => parametro.tipoPruebaId === item.tipoPruebaId).map((parametro) => (
            {
              valorMin: "",
              valorMax: "",
              ...parametro
            }
          )),
          ...item
        }
      ))]);

    setPruebas(pruebas.filter((item) => !selected.includes(item)));
    setOpenPruebas(false);
  };

  const handleDeletePrueba = (id) => {
    const removed = form.watch("pruebas").find((item) => item.tipoPruebaId === id);
    form.setValue("pruebas", form.watch("pruebas").filter((item) => item.tipoPruebaId !== id));
    setPruebas([...pruebas, removed]);
  };

  useEffect(() => {
    if (form_repuestos.length > 0 && form.formState.errors.repuestos) {
      form.clearErrors("repuestos");
    }
  }, [form, form_repuestos]);

  useEffect(() => {
    if (form.watch("pruebas").length > 0 && form.formState.errors.pruebas) {
      form.clearErrors("pruebas");
    }
  }, [form, form_pruebas]);

  useEffect(() => {
    console.log("----Errors----")
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return (
    <div className="h-full flex flex-col min-w-min">
      <h1 className="text-2xl pb-4 text-left font-medium leading-none">
        Registrar Proyecto
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormCliente fr={form} />
          <FormProyecto
            fr={form}
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
            <FormField
              control={form.control}
              name="pruebas"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="pruebas">Pruebas</FormLabel>
                  <ListaPruebas fields={field.value} fr={form} onDelete={handleDeletePrueba} />
                  <FormMessage error={form.formState.errors.pruebas} />
                </FormItem>
              )}
            />

            {/* <FormLabel
              htmlFor="proforma"
              className={`${manualError[0] && "text-red-600"}`}
            >
              Añadir proforma
            </FormLabel>
            <div className="h-20 flex flex-col">
              <FileProyecto
                onAddProforma={handleAddProforma}
                manualError={manualError}
                fr={form}
              />
              {(form.formState.errors.file ||
                form.formState.errors.fileName) && (
                  <span className="text-red-600">Deba añadir una proforma</span>
                )}
            </div> */}

            <StockPruebas pruebas={pruebas} parametros={PARAMETRO} onAdd={handleAddPruebas} isOpen={openPruebas} onClose={() => { setOpenPruebas(false) }} />
            <Button className="w-full mt-2" type="button" onClick={() => {
              setOpenPruebas(true);
            }}>
              Añadir Pruebas
            </Button>
            <Button className="w-full mt-2" type="submit">
              Crear Proyecto
            </Button>
          </div>
        </form>
      </Form>
      <Button
        className="w-full mt-2 bg-red-700"
        type="button"
        onClick={handleCancelar}
      >
        Cancelar
      </Button>
    </div>
  );
}

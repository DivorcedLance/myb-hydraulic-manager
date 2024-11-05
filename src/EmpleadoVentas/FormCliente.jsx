import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl
} from "@/components/ui/form";
import { Combobox } from "@/components/ComboBox";
import { useEffect, useState } from "react";


const clientesDB = [
  {
    Nombre: "Juan Pérez",
    ruc: "20458796123",
    numeroDocumento: "47283910",
    tipoDocumento: "c_extranjeria"
  },
  {
    Nombre: "María Rodríguez",
    ruc: "20123456789",
    numeroDocumento: "87654321",
    tipoDocumento: "dni"
  },
  {
    Nombre: "Empresa XYZ SAC",
    ruc: "20509874561",
    numeroDocumento: "00000000",
    tipoDocumento: "pasaporte"
  },
  {
    Nombre: "Luis Fernández",
    ruc: "20457812345",
    numeroDocumento: "65432198",
    tipoDocumento: "c_extranjeria"
  },
  {
    Nombre: "Ana López",
    ruc: "20698765432",
    numeroDocumento: "12345678",
    tipoDocumento: "dni"
  }
];

const tiposDocumento = [
  {
    label: "DNI",
    value: "dni"
  },
  {
    label: "Carné de Extranjería",
    value: "c_extranjeria"
  },
  {
    label: "Pasaporte",
    value: "pasaporte"
  },
];

export function FormCliente({ fr }) {
  //Lista de Clientes registrados
  const [currentClient, setCurrentClient] = useState();

  useEffect(() => {
    if (currentClient) {
      let c = clientesDB.find((c) => c.ruc === currentClient);
      fr.setValue("nombre", c.Nombre);
      fr.setValue("ruc", c.ruc);
      fr.setValue("nroDocumento", c.numeroDocumento);
      fr.setValue("tipoDocumento", c.tipoDocumento);
      fr.clearErrors("nombre");
      fr.clearErrors("ruc");
      fr.clearErrors("nroDocumento");
      fr.clearErrors("tipoDocumento");
    }
  }, [currentClient, fr]);

  return (
    <div>
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Cliente
      </h1>
      <Combobox
        items={clientesDB}
        getValue={(item) => item}
        getLabel={(item) => item.Nombre}
        getRealValue={(item) => item.ruc}
        itemName="Cliente"
        initialValue={currentClient}
        onSelection={(value) => { setCurrentClient(value); }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <FormField
          control={fr.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nombre">Nombre</FormLabel>
              <Input value={field.value} readOnly {...field} id="nombre" />
              <FormMessage error={fr.formState.errors.nombre} />
            </FormItem>
          )}
        />
        <FormField
          control={fr.control}
          name="ruc"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="ruc">RUC</FormLabel>
              <Input value={field.value} readOnly className="disabled:opacity-100" {...field} id="ruc" />
              <FormMessage error={fr.formState.errors.ruc} />
            </FormItem>
          )}
        />
        <FormField
          control={fr.control}
          name="tipoDocumento"
          render={({ field }) => (
            <FormItem className="space-y-3 mx-auto">
              <FormLabel>Tipo de Documento</FormLabel>
              <RadioGroup
                disabled={true}
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-row space-x-3"
              >
                {tiposDocumento.map((tipo) => (
                  <FormItem key={tipo.value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem className="disabled:opacity-100" value={tipo.value} />
                    </FormControl>
                    <FormLabel className="font-normal">
                      {tipo.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
              <FormMessage error={fr.formState.errors.tipoDocumento} />
            </FormItem>
          )}
        />
        <FormField
          control={fr.control}
          name="nroDocumento"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="nroDocumento">Numero de Documento</FormLabel>
              <Input value={field.value} readOnly className="disabled:opacity-100" {...field} id="nrodocumento" />
              <FormMessage error={fr.formState.errors.nroDocumento} />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

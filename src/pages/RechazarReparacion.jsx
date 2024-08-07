import { FormRechazar } from "@/JefeTecnico/RechazarReparacion/FormRechazar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function RechazarReparacion({ proyecto, cliente }) {

  const navigate = useNavigate();

  const [fields, setFields] = useState({
    pruebas_fallidas: "",
    detalles_sugerencias: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };

  const handleRechazar = () => {
    setFields({
      pruebas_fallidas: "",
      detalles_sugerencias: "",
    });
    navigate("/projectView/");
  };

  const handleCancelar = () => {
    setFields({
      pruebas_fallidas: "",
      detalles_sugerencias: "",
    });
    navigate("/projectView/");
  };

  return (
    <div className="h-full flex flex-col min-w-min">
      <h1 className="text-2xl pb-6 text-left font-medium leading-none">
        Rechazar Reparación
      </h1>
      <h2 className="text-lg mb-4 text-left font-medium leading-none">
        Proyecto: {proyecto ? proyecto : "Nombre del proyecto"}
      </h2>
      <h2 className="text-lg mb-4 text-left font-medium leading-none">
        Cliente: {cliente ? cliente : "Nombre del cliente"}
      </h2>
      <div className="flex-grow my-4" style={{ height: "54vh" }}>
        <FormRechazar fields={fields} onChange={handleChange} />
      </div>

      <div className="min-h-min my-auto">
        <Button
          className={"w-full my-1 bg-red-800 hover:bg-red-950"}
          onClick={handleRechazar}
        >
          Rechazar
        </Button>
        <Button
          className={"w-full mt-1"}
          onClick={handleCancelar}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { EmployeeSection } from "../JefeTecnico/AsignarTarea/EmployeeSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function AsignarTareaPage() {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/myb-hydraulic-manager/employees.json')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error loading the projects:', error));
  }, []);

  const [selected, setSelected] = useState([]);

  const handleSelect = (employee_i) => {
    if (selected.includes(employee_i)) {
      setSelected(selected.filter((e) => e.id !== employee_i));
      return;
    }
    setSelected([...selected, employee_i]);
  };

  const handleAssign = () => {
    const unassigned = employees.filter((e) => !selected.includes(e.id));
    // TODO: Detectar estado del proyecto seleccionado (Zustand 🙏)
    // TODO: Send to database (localStorage)
    setEmployees(unassigned);
    setSelected([]);
    // TODO: Redirigir a la vista del proyecto seleccionado
    navigate("/projectView/");

  };

  const handleCancel = () => {
    navigate("/projectView/");
  }

  return (
    <div className="h-full flex flex-col min-w-min">
      <h1 className="text-2xl pb-4 text-left font-medium leading-none">
        Asignar Tareas
      </h1>
      <div
        className="flex-grow overflow-y-auto"
        style={{ height: "80vh" }}
      >
        <EmployeeSection employees={employees} handleSelect={handleSelect} />
      </div>

      <div className="flex flex-col gap-3">
        <Button className={"w-full"} onClick={handleAssign}>
          Asignar
        </Button>
        <Button className={"w-full"} onClick={handleCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

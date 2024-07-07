import { useEffect, useState } from "react";
import { EmployeeSection } from "../JefeTecnico/AsignarTarea/EmployeeSection";
import { Button } from "@/components/ui/button";

export function AsignarTareaPage() {

  const [employees, setEmployees] = useState([]);

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
  };

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

      <div className="min-h-min my-auto">
        <Button className={"w-full"} onClick={handleAssign}>
          Asignar
        </Button>
      </div>
    </div>
  );
}

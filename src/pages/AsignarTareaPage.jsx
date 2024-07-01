import { useState } from "react";
import { EmployeeSection } from "../JefeTecnico/AsignarTarea/EmployeeSection";
import { Button } from "@/components/ui/button";

export function AsignarTareaPage() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Practicante",
      imageSrc: "https://robohash.org/21?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Empleado",
      imageSrc: "https://robohash.org/22?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 3,
      name: "James Doe",
      role: "Logística",
      imageSrc: "https://robohash.org/23?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Jefe",
      imageSrc: "https://robohash.org/24?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 5,
      name: "Jane Doe",
      role: "Ventas",
      imageSrc: "https://robohash.org/25?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 6,
      name: "James Doe",
      role: "Practicante",
      imageSrc: "https://robohash.org/26?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 7,
      name: "John Doe",
      role: "Practicante",
      imageSrc: "https://robohash.org/27?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 8,
      name: "Jane Doe",
      role: "Practicante",
      imageSrc: "https://robohash.org/28?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
    {
      id: 9,
      name: "James Doe",
      role: "Practicante",
      imageSrc: "https://robohash.org/29?set=set4&size=100x100",
      projectID: null,
      status: "Disponible",
    },
  ]);

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

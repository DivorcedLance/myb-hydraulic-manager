import { useState } from "react";
import { EmployeeSection } from "./EmployeeSection";
import { Button } from "@/components/ui/button";

export function AsignarTarea() {
  const [employees, setEmployees] = useState([
    {
      name: "John Doe",
      role: "Developer",
      photo: "https://randomuser.me/api/portraits/med/men/76.jpg",
    },
    {
      name: "Jane Doe",
      role: "Designer",
      photo: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
    {
      name: "James Doe",
      role: "Manager",
      photo: "https://randomuser.me/api/portraits/med/men/78.jpg",
    },
    {
      name: "John Doe",
      role: "Developer",
      photo: "https://randomuser.me/api/portraits/med/men/76.jpg",
    },
    {
      name: "Jane Doe",
      role: "Designer",
      photo: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
    {
      name: "James Doe",
      role: "Manager",
      photo: "https://randomuser.me/api/portraits/med/men/78.jpg",
    },
    {
      name: "John Doe",
      role: "Developer",
      photo: "https://randomuser.me/api/portraits/med/men/76.jpg",
    },
    {
      name: "Jane Doe",
      role: "Designer",
      photo: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
    {
      name: "James Doe",
      role: "Manager",
      photo: "https://randomuser.me/api/portraits/med/men/78.jpg",
    },
  ]);

  const [selected, setSelected] = useState([]);

  const handleSelect = (employee_i) => {
    if (selected.includes(employee_i)) {
      setSelected(selected.filter((e) => e !== employee_i));
      return;
    }
    setSelected([...selected, employee_i]);
  };

  const handleAssign = () => {
    const unassigned = employees.filter((e, i) => !selected.includes(i));
    setEmployees(unassigned);
    setSelected([]);
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

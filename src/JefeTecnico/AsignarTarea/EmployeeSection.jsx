import { EmployeeCard } from "./EmployeeCard";

export function EmployeeSection({ employees, handleSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {employees.map((employee) => {
        return (
          <div key={employee.id} className="min-w-80">
            <EmployeeCard
              employee={employee}
              onSelect={handleSelect}
            />
          </div>
        );
      })}
    </div>
  );
}

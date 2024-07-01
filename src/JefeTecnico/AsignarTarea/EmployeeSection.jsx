import { EmployeeCard } from "./EmployeeCard";

export function EmployeeSection({ employees, handleSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {employees.map((e, i) => {
        return (
          <div className="min-w-80">
            <EmployeeCard
              key={e.name}
              employee={e}
              id={i}
              onSelect={handleSelect}
            />
          </div>
        );
      })}
    </div>
  );
}

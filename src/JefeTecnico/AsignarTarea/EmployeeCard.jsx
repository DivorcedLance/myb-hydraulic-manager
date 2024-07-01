import { CardDemo } from "@/components/Card";

export function EmployeeCard({ employee, id, onSelect }) {
  return (
    <CardDemo
      title={employee.name}
      icon={employee.photo}
      subtitle={employee.role}
      onToggle={() => onSelect(id)}
    />
  );
}

import { CardDemo } from "@/components/Card";

export function EmployeeCard({ employee, onSelect }) {
  return (
    <CardDemo
      title={employee.name}
      image={employee.imageSrc}
      imageAlt={employee.name}
      subtitle={employee.role}
      onToggle={() => onSelect(employee.id)}
    />
  );
}

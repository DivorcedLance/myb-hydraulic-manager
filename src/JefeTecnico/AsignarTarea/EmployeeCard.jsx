import { CardWithSwitch } from "@/components/RepuestoCard2/CardWithSwitch";

export function EmployeeCard({ employee, onSelect }) {
  return (
    <CardWithSwitch
      title={employee.name}
      image={employee.imageSrc}
      imageAlt={employee.name}
      subtitle={employee.role}
      onToggle={() => onSelect(employee.id)}
    />
  );
}

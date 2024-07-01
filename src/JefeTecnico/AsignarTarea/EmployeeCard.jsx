import { CardWithSwitch } from "@/components/CardWithSwitch";

export function EmployeeCard({ employee, id, onSelect }) {
  return (
    <CardWithSwitch
      title={employee.name}
      icon={employee.photo}
      subtitle={employee.role}
      onToggle={() => onSelect(id)}
    />
  );
}

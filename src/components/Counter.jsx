import { Input } from "@/components/ui/input";

export function Counter({ initValue, onChange, id, ...props }) {
  return (
    <Input
      {...props}
      id={id}
      value={initValue}
      onChange={onChange}
      type="number"
      placeholder="0"
    />
  );
}

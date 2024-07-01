import { Input } from "@/components/ui/input";

export function Counter({ initValue, onChange, id }) {
  return (
    <Input
      id={id}
      value={initValue}
      onChange={onChange}
      type="number"
      placeholder="0"
    />
  );
}

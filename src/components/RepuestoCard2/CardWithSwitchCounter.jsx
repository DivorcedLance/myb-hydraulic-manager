import { Switch } from "../ui/switch";
import { Card } from "../Card";
import { Counter } from "./Counter";

export function CardWithSwitchCounter({
  onToggle,
  onChange,
  countervalue, 
  ...props
}) {
  return (
    <Card {...props}>
      <Counter initValue={countervalue} onChange={onChange} />
      <Switch onClick={onToggle} />
    </Card>
  );
}

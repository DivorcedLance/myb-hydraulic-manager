import { Switch } from "./ui/switch";
import { CardDemo } from "./Card";
import { Counter } from "./Counter";

export function CardWithSwitchCounter({
  onToggle,
  onChange,
  countervalue, 
  ...props
}) {
  return (
    <CardDemo {...props}>
      <Counter initValue={countervalue} onChange={onChange} />
      <Switch onClick={onToggle} />
    </CardDemo>
  );
}

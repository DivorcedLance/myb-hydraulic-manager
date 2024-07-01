import { Switch } from "./ui/switch";
import { CardDemo } from "./Card";

export function CardWithSwitch({ onToggle, id, ...props }) {
  return (
    <CardDemo {...props}>
      <Switch onClick={onToggle} />
    </CardDemo>
  );
}

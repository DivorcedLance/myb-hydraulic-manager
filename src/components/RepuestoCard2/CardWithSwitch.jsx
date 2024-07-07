import { Switch } from "../ui/switch";
import { CardDemo } from "../Card";

export function CardWithSwitch({ onToggle, ...props }) {
  return (
    <CardDemo {...props}>
      <Switch onClick={onToggle} />
    </CardDemo>
  );
}

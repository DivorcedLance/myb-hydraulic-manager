import { Switch } from "../ui/switch";
import { Card } from "../Card";

export function CardWithSwitch({ onToggle, id, ...props }) {
  return (
    <Card {...props}>
      <Switch onClick={onToggle} />
    </Card>
  );
}

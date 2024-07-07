import { Card } from "../Card";
import { Counter } from "./Counter";

export function CardWithCounter({
  onChange,
  countervalue, 
  ...props
}) {
  return (
    <Card {...props}>
      <Counter initValue={countervalue} onChange={onChange} />
    </Card>
  );
}

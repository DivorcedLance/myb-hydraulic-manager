import { CardDemo } from "./Card";
import { Counter } from "./Counter";

export function CardWithCounter({
  onChange,
  countervalue, 
  ...props
}) {
  return (
    <CardDemo {...props}>
      <Counter initValue={countervalue} onChange={onChange} />
    </CardDemo>
  );
}

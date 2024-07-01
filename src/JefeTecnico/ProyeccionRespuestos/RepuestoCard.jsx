import { CardWithSwitchCounter } from "@/components/CardWithSwitchCounter";
import { useState } from "react";

export function RepuestoCard({
  onSelected,
  onChange,
  id,
  cantidad,
  ...props
}) {
  return (
    <CardWithSwitchCounter
      {...props}
      onToggle={() => onSelected(id)}
      onChange={(e) => onChange(id, e.target.value)}
      countervalue={cantidad}
    />
  );
}

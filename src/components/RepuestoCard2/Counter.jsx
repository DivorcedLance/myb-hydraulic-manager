import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Usamos forwardRef para pasar la ref a Input
export const Counter = forwardRef(({ initValue, className, onChange, id, ...props }, ref) => {
  return (
    <Input
      {...props}
      ref={ref || null}
      id={id}
      value={initValue}
      onChange={onChange}
      type="number"
      placeholder="0"
      className={cn("text-center", className || "w-12")}
    />
  );
});

// Asigna un nombre de display para debugging
Counter.displayName = "Counter";
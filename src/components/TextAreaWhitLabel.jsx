import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel({ title, value, onChange, placeholder, id }) {
  return (
    <div className="grid w-full text-left gap-1.5">
      <Label htmlFor={id}>{title}</Label>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
}

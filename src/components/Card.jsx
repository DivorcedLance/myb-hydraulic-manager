import { CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function CardDemo({ className, onToggle, title, subtitle, icon, ...props }) {
  return (
    <CardContent className="grid gap-4">
      <div className=" flex items-center space-x-4 rounded-md border p-4">
        <img src={icon} alt="icon" />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <Switch onClick={onToggle} />
      </div>
    </CardContent>
  );
}

import { CardContent } from "@/components/ui/card";
import { PictureCard } from "./PictureCard";

export function CardDemo({ title, subtitle, image, imageAlt, children }) {
  return (
    <CardContent className="grid gap-4">
      <div className=" flex items-center space-x-4 rounded-md border p-4 h-32">
        <PictureCard imageSrc={image} name={imageAlt} />
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {children}
      </div>
    </CardContent>
  );
}

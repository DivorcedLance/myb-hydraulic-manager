import { useState } from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function Combobox({ items, getValue, getLabel, getRealValue, itemName, onSelection }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value ? getLabel(items.find((item) => getLabel(item) === value)) : `Seleccionar ${itemName}`}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Buscar ${itemName}...`} className="h-9" />
          <CommandList>
            <CommandEmpty>No encontrado</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={getValue(item)}
                  value={getValue(item)}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                    if (onSelection && value) {
                      onSelection(getRealValue(item))
                    }
                  }}
                >
                  {getLabel(item)}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      getValue(value) === getValue(item) ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

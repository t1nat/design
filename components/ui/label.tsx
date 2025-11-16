// /components/ui/label.tsx
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

// Упростена функция за обединяване на класове
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Дефинирайте цветовете
const COLORS = {
    white: '#FEFFFE',
};

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      // Вашият стил
      `text-[${COLORS.white}]`,
      className
    )}
    style={{ color: COLORS.white }}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
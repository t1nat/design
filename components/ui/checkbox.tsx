// /components/ui/checkbox.tsx

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

// Упростена икона за отметка
const Check = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;

// Упростена функция за обединяване на класове
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Дефинирайте цветовете
const COLORS = {
    deepTwilight: '#000E50', // Тъмно синьо (фон)
    brightLavender: '#CC8DE1', // Лавандула (акцент)
    white: '#FEFFFE',
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      
      // 🚨 КОРЕКЦИЯ: Използваме директен Tailwind синтаксис за стилизиране
      // data-[state=checked] се стилизира с `data-[state=checked]:...`
      
      // Рамка, фон и фокус ринг:
      `border-[1px] border-[${COLORS.brightLavender}] bg-[${COLORS.deepTwilight}]`, 
      
      // Стил при фокус:
      `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[${COLORS.brightLavender}] focus-visible:ring-offset-2`,
      
      // Стил при CHECKED състояние:
      `data-[state=checked]:bg-[${COLORS.brightLavender}] data-[state=checked]:border-[${COLORS.brightLavender}]`,
      
      className
    )}
    // Премахваме всички проблемни инлайн стилове, освен ако не са необходими за специфични цели
    {...props}
  >
    <CheckboxPrimitive.Indicator
      // Уверете се, че индикаторът е видим само при checked и има правилния цвят на отметката
      className={cn("flex items-center justify-center h-full w-full data-[state=checked]:text-current")}
    >
      {/* Иконата трябва да има цвета на deepTwilight, за да се вижда на лавандуловия фон */}
      <Check className={`h-4 w-4 text-[${COLORS.deepTwilight}]`} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
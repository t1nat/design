// /components/ui/input.tsx
import * as React from "react"

// Упростена функция за обединяване на класове
// В реален проект обикновено идва от "@/lib/utils"
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Дефинирайте цветовете
const COLORS = {
    deepTwilight: '#000E50',
    brightLavender: '#CC8DE1',
    white: '#FEFFFE',
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          // Вашият стил
          `text-[${COLORS.white}] border border-gray-600 focus-visible:ring-[${COLORS.brightLavender}]`,
          className
        )}
        style={{ 
            backgroundColor: COLORS.deepTwilight,
            color: COLORS.white,
            borderColor: COLORS.brightLavender, // Използваме лавандулово за рамка
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2)',
        }}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
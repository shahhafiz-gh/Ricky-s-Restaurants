import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body uppercase tracking-wider",
  {
    variants: {
      variant: {

        default:
          "bg-gold text-brown-900 shadow-md hover:bg-gold-400 hover:shadow-gold-glow active:scale-[0.98]",

        secondary:
          "bg-brown text-cream-50 shadow-md hover:bg-brown-600 active:scale-[0.98]",

        outline:
          "border-2 border-gold text-gold bg-transparent hover:bg-gold/10 active:scale-[0.98]",

        "outline-brown":
          "border-2 border-brown text-brown bg-transparent hover:bg-brown/10 active:scale-[0.98]",
        ghost:
          "text-foreground hover:bg-gold/10 hover:text-gold",
        link:
          "text-gold underline-offset-4 hover:underline p-0 h-auto font-medium normal-case tracking-normal",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-10 text-base",
        xl: "h-14 rounded-md px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium",
  {
    variants: {
      intent: {
        primary: "bg-primary-500 text-nutural-50",
        secondary: " bg-primary-100 text-primary-400",
        link: "bg-transparent underline-offset-4 hover:underline",
        outlined: "bg-transparent border border-nutural-400",
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, intent, size, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href} className={cn(buttonVariants({ intent, size, className }))}>
          {children}
        </Link>
      );
    }
    return (
      <button className={cn(buttonVariants({ intent, size, className }))} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export { Button, buttonVariants };

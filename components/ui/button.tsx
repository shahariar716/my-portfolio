import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-glow hover:-translate-y-0.5",
        variant === "secondary" &&
          "glass text-foreground hover:-translate-y-0.5 hover:bg-white/20 dark:hover:bg-white/10",
        variant === "ghost" && "hover:bg-slate-500/15",
        className,
      )}
      {...props}
    />
  );
}

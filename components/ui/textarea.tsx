import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-2xl border border-white/15 bg-white/45 px-4 py-3 text-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 dark:bg-slate-950/40",
        className,
      )}
      {...props}
    />
  );
}

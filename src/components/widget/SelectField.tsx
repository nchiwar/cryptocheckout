import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  error?: boolean;
  className?: string;
  onClick?: () => void;
}

export function SelectField({
  label,
  placeholder,
  value,
  error = false,
  className,
  onClick,
}: SelectFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm text-muted-foreground">{label}</label>
      <button
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 bg-card border rounded-xl transition-all duration-200",
          error
            ? "border-destructive ring-2 ring-destructive/20"
            : "border-border hover:border-primary/50"
        )}
      >
        <span className={cn(value ? "text-card-foreground" : "text-muted-foreground")}>
          {value || placeholder}
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
}

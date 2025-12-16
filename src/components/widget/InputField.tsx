import { cn } from "@/lib/utils";

interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: boolean;
  className?: string;
}

export function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error = false,
  className,
}: InputFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full px-4 py-3 bg-card border rounded-xl text-card-foreground placeholder:text-muted-foreground outline-none transition-all duration-200",
          error
            ? "border-destructive ring-2 ring-destructive/20"
            : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
        )}
      />
    </div>
  );
}

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  countryCode?: string;
  placeholder?: string;
  className?: string;
}

export function PhoneInput({
  label,
  value,
  onChange,
  countryCode = "+234",
  placeholder = "000 - 000 - 000000",
  className,
}: PhoneInputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label className="text-sm text-muted-foreground">{label}</label>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 px-3 py-3 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
          <span className="text-sm font-medium text-card-foreground">{countryCode}</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 bg-card border border-border rounded-xl text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
        />
      </div>
    </div>
  );
}

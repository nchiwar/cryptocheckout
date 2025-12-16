import { CurrencyDropdown, Currency, currencies } from "./CurrencyDropdown";
import { cn } from "@/lib/utils";

interface AmountInputProps {
  label: string;
  amount: string;
  currencyCode: string;
  onAmountChange?: (value: string) => void;
  onCurrencyChange?: (currency: Currency) => void;
  readOnly?: boolean;
  error?: string;
  filterType?: "crypto" | "fiat";
}

export function AmountInput({
  label,
  amount,
  currencyCode,
  onAmountChange,
  onCurrencyChange,
  readOnly = false,
  error,
  filterType,
}: AmountInputProps) {
  const validateAndSetAmount = (value: string) => {
    // Allow empty, digits, and one decimal point
    const regex = /^(\d*\.?\d*)$/;
    if (regex.test(value) || value === "") {
      onAmountChange?.(value);
    }
  };

  const selectedCurrency = currencies.find((c) => c.code === currencyCode);

  return (
    <div className="space-y-2">
      <label className="text-sm text-muted-foreground">{label}</label>
      <div className="relative">
        <input
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={(e) => validateAndSetAmount(e.target.value)}
          readOnly={readOnly}
          className={cn(
            "w-full px-4 py-4 pr-28 bg-secondary rounded-xl border text-2xl font-semibold text-card-foreground outline-none transition-colors",
            error
              ? "border-destructive ring-2 ring-destructive/20"
              : "border-border focus:border-primary/50"
          )}
          placeholder="0.00"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {onCurrencyChange ? (
            <CurrencyDropdown
              selectedCode={currencyCode}
              onSelect={onCurrencyChange}
              filterType={filterType}
            />
          ) : (
            <div className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border border-border">
              {selectedCurrency && (
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                  {selectedCurrency.symbol}
                </span>
              )}
              <span className="text-sm font-medium text-card-foreground">
                {currencyCode}
              </span>
            </div>
          )}
        </div>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

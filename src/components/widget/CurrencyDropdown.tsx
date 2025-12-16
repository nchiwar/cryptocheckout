import { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  type: "crypto" | "fiat";
}

export const currencies: Currency[] = [
  { code: "ETH", name: "Ethereum", symbol: "Ξ", type: "crypto" },
  { code: "BTC", name: "Bitcoin", symbol: "₿", type: "crypto" },
  { code: "USDT", name: "Tether", symbol: "$", type: "crypto" },
  { code: "BNB", name: "BNB", symbol: "◈", type: "crypto" },
  { code: "SOL", name: "Solana", symbol: "◎", type: "crypto" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", type: "fiat" },
  { code: "USD", name: "US Dollar", symbol: "$", type: "fiat" },
  { code: "EUR", name: "Euro", symbol: "€", type: "fiat" },
  { code: "GBP", name: "British Pound", symbol: "£", type: "fiat" },
  { code: "GHS", name: "Ghanaian Cedi", symbol: "₵", type: "fiat" },
];

interface CurrencyDropdownProps {
  selectedCode: string;
  onSelect: (currency: Currency) => void;
  filterType?: "crypto" | "fiat";
}

export function CurrencyDropdown({
  selectedCode,
  onSelect,
  filterType,
}: CurrencyDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedCurrency = currencies.find((c) => c.code === selectedCode);
  
  const filteredCurrencies = currencies.filter((currency) => {
    const matchesType = !filterType || currency.type === filterType;
    const matchesSearch =
      currency.code.toLowerCase().includes(search.toLowerCase()) ||
      currency.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg border border-border hover:bg-muted transition-colors">
          {selectedCurrency && (
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">
              {selectedCurrency.symbol}
            </span>
          )}
          <span className="text-sm font-medium text-card-foreground">
            {selectedCode}
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-56 p-0 bg-card border border-border z-50"
        align="end"
      >
        <div className="p-2 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search currency..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm bg-secondary rounded-lg border border-border text-card-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50"
            />
          </div>
        </div>
        <div className="max-h-48 overflow-y-auto">
          {filteredCurrencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => {
                onSelect(currency);
                setOpen(false);
                setSearch("");
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 hover:bg-muted transition-colors",
                selectedCode === currency.code && "bg-primary/10"
              )}
            >
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                {currency.symbol}
              </span>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-card-foreground">
                  {currency.code}
                </p>
                <p className="text-xs text-muted-foreground">{currency.name}</p>
              </div>
              {selectedCode === currency.code && (
                <Check className="w-4 h-4 text-primary" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

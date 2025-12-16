import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface WalletAddressInputProps {
  label: string;
  address: string;
}

export function WalletAddressInput({ label, address }: WalletAddressInputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <label className="text-sm text-muted-foreground">{label}</label>
      <div className="flex items-center gap-2 p-4 bg-secondary rounded-xl border border-border">
        <span className="flex-1 text-sm font-mono text-card-foreground truncate">
          {address}
        </span>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  );
}

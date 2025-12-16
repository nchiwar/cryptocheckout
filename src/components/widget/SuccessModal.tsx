import { CheckCircle2, Copy, Check } from "lucide-react";
import { useState } from "react";

interface SuccessModalProps {
  transactionId: string;
  onClose: () => void;
}

export function SuccessModal({ transactionId, onClose }: SuccessModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(transactionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-sm bg-card rounded-2xl shadow-widget p-6 animate-scale-in">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-semibold text-card-foreground">NOVACRUST</span>
          </div>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-success/30 animate-pulse-ring" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-1">
            Your transaction is processing.
          </h3>
          <p className="text-sm text-muted-foreground">
            The recipient will receive it shortly.
          </p>
        </div>

        {/* Transaction ID */}
        <div className="mb-6">
          <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
            <div>
              <p className="text-xs text-muted-foreground">Transaction ID</p>
              <p className="text-sm font-mono text-card-foreground">{transactionId}</p>
            </div>
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

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full py-3 px-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors"
        >
          Go back to home
        </button>
      </div>
    </div>
  );
}

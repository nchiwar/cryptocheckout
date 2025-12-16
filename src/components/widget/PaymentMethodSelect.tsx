import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const MetamaskIcon = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6">
    <path fill="#E17726" d="M35.1 3.3L21.9 13l2.4-5.8z"/>
    <path fill="#E27625" d="M4.9 3.3l13 9.8-2.2-5.8zm25.3 22.8l-3.5 5.4 7.5 2.1 2.2-7.3zm-28.3.2l2.1 7.3 7.5-2.1-3.5-5.4z"/>
    <path fill="#E27625" d="M11.1 17.2l-2.1 3.2 7.4.3-.3-8zm17.8 0l-5.2-4.6-.2 8.1 7.4-.3zm-17.4 14.9l4.5-2.2-3.9-3zm12.5-2.2l4.5 2.2-.6-5.2z"/>
    <path fill="#D5BFB2" d="M28.5 32.1l-4.5-2.2.4 2.9v1.2zm-17 0l3.7 1.9v-1.2l.3-2.9z"/>
    <path fill="#233447" d="M15.3 25l-3.7-1.1 2.6-1.2zm9.4 0l1.1-2.3 2.6 1.2z"/>
    <path fill="#CC6228" d="M11.5 32.1l.6-5.2-4.1.1zm16.4-5.2l.6 5.2 3.5-5.1zm4-6.5l-7.4.3.7 3.9 1.1-2.3 2.6 1.2zm-20.3 3.1l2.6-1.2 1.1 2.3.7-3.9-7.5-.3z"/>
    <path fill="#E27525" d="M9 20.4l3.1 6.1-.1-3zm18.9 3.1l-.1 3 3.1-6.1zm-11.4-2.8l-.7 3.9.9 4.5.2-5.9zm7 0l-.4 2.5.2 5.9.9-4.5z"/>
    <path fill="#F5841F" d="M24.7 25l-.9 4.5.6.5 3.9-3-.1-3zm-13.1-1.1l-.1 3 3.9 3 .6-.5-.9-4.5z"/>
    <path fill="#C0AC9D" d="M24.8 34l-.1-1.2-.3-.3h-4.8l-.3.3-.1 1.2-3.7-1.9 1.3 1.1 2.6 1.8h5l2.6-1.8 1.3-1.1z"/>
    <path fill="#161616" d="M24 29.9l-.6-.5h-3.8l-.6.5-.3 2.9.3-.3h4.8l.3.3z"/>
    <path fill="#763E1A" d="M35.9 13.7l1.1-5.4-1.7-5-13 9.6 5 4.2 7.1 2.1 1.6-1.8-.7-.5 1.1-1-.8-.6 1.1-.9zm-33.9-5.4l1.2 5.4-.8.6 1.1.9-.8.6 1.1 1-.7.5 1.6 1.8 7.1-2.1 5-4.2-13-9.6z"/>
    <path fill="#F5841F" d="M34.4 19.2l-7.1-2.1 2.2 3.2-3.2 6.2 4.2-.1h6.2zm-23.3-2.1l-7.1 2.1-2.4 7.2h6.2l4.2.1-3.2-6.2zm10.4 3.5l.5-8.1 2-5.4h-8.9l2 5.4.4 8.1.2 2.5v5.9h3.8l.1-5.9z"/>
  </svg>
);

const RainbowIcon = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6">
    <defs>
      <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B"/>
        <stop offset="25%" stopColor="#FFE66D"/>
        <stop offset="50%" stopColor="#4ECDC4"/>
        <stop offset="75%" stopColor="#45B7D1"/>
        <stop offset="100%" stopColor="#A66CFF"/>
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#rainbow)" strokeWidth="3"/>
    <circle cx="20" cy="20" r="12" fill="none" stroke="url(#rainbow)" strokeWidth="3"/>
    <circle cx="20" cy="20" r="6" fill="url(#rainbow)"/>
  </svg>
);

const WalletConnectIcon = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6">
    <path fill="#3B99FC" d="M10.8 14.4c5.1-5 13.3-5 18.4 0l.6.6c.3.3.3.7 0 .9l-2 2c-.1.1-.3.1-.5 0l-.8-.8c-3.5-3.5-9.3-3.5-12.8 0l-.9.9c-.1.1-.3.1-.5 0l-2-2c-.3-.3-.3-.7 0-.9l.5-.7zm22.7 4.2l1.8 1.8c.3.2.3.6 0 .9l-8 7.9c-.3.3-.7.3-.9 0l-5.7-5.6c-.1-.1-.2-.1-.2 0l-5.7 5.6c-.3.3-.7.3-.9 0l-8-7.9c-.3-.3-.3-.7 0-.9l1.8-1.8c.2-.3.6-.3.9 0l5.7 5.6c.1.1.2.1.2 0l5.7-5.6c.3-.3.7-.3.9 0l5.7 5.6c.1.1.2.1.2 0l5.7-5.6c.2-.3.6-.3.8 0z"/>
  </svg>
);

const OtherWalletIcon = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6">
    <rect x="4" y="10" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 16h32" stroke="currentColor" strokeWidth="2"/>
    <circle cx="30" cy="22" r="3" fill="currentColor"/>
  </svg>
);

interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
  icon: React.ReactNode;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "metamask",
    name: "Metamask",
    icon: <MetamaskIcon />,
  },
  {
    id: "rainbow",
    name: "Rainbow",
    icon: <RainbowIcon />,
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    icon: <WalletConnectIcon />,
  },
  {
    id: "other",
    name: "Other Crypto wallet",
    icon: <OtherWalletIcon />,
  },
];

interface PaymentMethodSelectProps {
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function PaymentMethodSelect({ selectedId, onSelect }: PaymentMethodSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-muted-foreground">Pay from</label>
      <div className="space-y-2">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200",
              selectedId === method.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 bg-card"
            )}
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-card-foreground">
              {method.icon}
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-card-foreground">{method.name}</p>
              {method.description && (
                <p className="text-xs text-muted-foreground">{method.description}</p>
              )}
            </div>
            {selectedId === method.id && (
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
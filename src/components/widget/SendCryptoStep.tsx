import { useState } from "react";
import { WalletAddressInput } from "./WalletAddressInput";
import { NetworkSelect } from "./NetworkSelect";
import { AlertCircle } from "lucide-react";

interface SendCryptoStepProps {
  onComplete: () => void;
}

export function SendCryptoStep({ onComplete }: SendCryptoStepProps) {
  const [network, setNetwork] = useState("eth");
  const walletAddress = "0L1VUYjax5LZ791t6jpl.nl";

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-card-foreground">Send ETH to the address below</h2>

      <WalletAddressInput
        label="Send ETH to the address below"
        address={walletAddress}
      />

      <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
        <span className="text-sm text-muted-foreground">Amount to send</span>
        <div className="text-right">
          <p className="text-sm font-semibold text-card-foreground">0.02 ETH</p>
        </div>
      </div>

      <NetworkSelect selectedId={network} onSelect={setNetwork} />

      <div className="flex gap-3 p-4 bg-warning/10 rounded-xl border border-warning/30">
        <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
        <p className="text-sm text-card-foreground">
          Only send USDC to this address. Ensure the network is on the USDC network, 
          otherwise you might lose your deposit.
        </p>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-4 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
      >
        I have sent the ETH
      </button>
    </div>
  );
}

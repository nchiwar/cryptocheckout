import { cn } from "@/lib/utils";

interface Network {
  id: string;
  name: string;
}

const networks: Network[] = [
  { id: "eth", name: "ETH" },
  { id: "bnb", name: "BNB" },
  { id: "other", name: "Other" },
];

interface NetworkSelectProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function NetworkSelect({ selectedId, onSelect }: NetworkSelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-muted-foreground">Network</label>
      <div className="flex gap-2">
        {networks.map((network) => (
          <button
            key={network.id}
            onClick={() => onSelect(network.id)}
            className={cn(
              "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200",
              selectedId === network.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-card-foreground hover:bg-muted"
            )}
          >
            {network.name}
          </button>
        ))}
      </div>
    </div>
  );
}

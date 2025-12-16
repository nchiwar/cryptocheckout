import { cn } from "@/lib/utils";

type Tab = "crypto-fiat" | "cash-crypto" | "crypto-fiat-send";

interface WidgetTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs = [
  { id: "crypto-fiat" as Tab, label: "Crypto to fiat" },
  { id: "cash-crypto" as Tab, label: "Cash to crypto" },
  { id: "crypto-fiat-send" as Tab, label: "Crypto to fiat send" },
];

export function WidgetTabs({ activeTab, onTabChange }: WidgetTabsProps) {
  return (
    <div className="flex gap-1 p-1 bg-muted rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex-1 px-3 py-2 text-xs font-medium rounded-md transition-all duration-200",
            activeTab === tab.id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-card-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

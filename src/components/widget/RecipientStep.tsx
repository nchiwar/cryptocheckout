import { useState } from "react";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";

interface RecipientStepProps {
  onNext: () => void;
}

export function RecipientStep({ onNext }: RecipientStepProps) {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountNumberConfirm, setAccountNumberConfirm] = useState("");
  const [showBankList, setShowBankList] = useState(false);

  const banks = ["Access Bank", "GTBank", "First Bank", "UBA", "Zenith Bank"];

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-card-foreground">Recipient details</h2>

      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Bank</label>
        <div className="relative">
          <SelectField
            label=""
            placeholder="Select an option"
            value={bank}
            onClick={() => setShowBankList(!showBankList)}
          />
          {showBankList && (
            <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
              {banks.map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setBank(b);
                    setShowBankList(false);
                  }}
                  className="w-full px-4 py-3 text-left text-sm text-card-foreground hover:bg-muted transition-colors"
                >
                  {b}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <InputField
        label="Account number"
        placeholder="Enter your account number"
        value={accountNumber}
        onChange={setAccountNumber}
      />

      <InputField
        label="Account number"
        placeholder="0007530A-0R0OC"
        value={accountNumberConfirm}
        onChange={setAccountNumberConfirm}
        error={accountNumberConfirm.length > 0 && accountNumberConfirm !== accountNumber}
      />

      <button
        onClick={onNext}
        className="w-full py-4 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
      >
        Next
      </button>
    </div>
  );
}

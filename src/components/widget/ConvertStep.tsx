import { useState } from "react";
import { WidgetTabs } from "./WidgetTabs";
import { AmountInput } from "./AmountInput";
import { SelectField } from "./SelectField";
import { PaymentMethodSelect } from "./PaymentMethodSelect";
import { Currency } from "./CurrencyDropdown";

interface ConvertStepProps {
  onNext: () => void;
}

export function ConvertStep({ onNext }: ConvertStepProps) {
  const [activeTab, setActiveTab] = useState<"crypto-fiat" | "cash-crypto" | "crypto-fiat-send">("crypto-fiat");
  const [sendAmount, setSendAmount] = useState("1.00");
  const [sendCurrency, setSendCurrency] = useState("ETH");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [paymentMethod, setPaymentMethod] = useState<string>();
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [errors, setErrors] = useState<{ amount?: string }>({});

  const validateForm = () => {
    const newErrors: { amount?: string } = {};
    
    if (!sendAmount || parseFloat(sendAmount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    } else if (parseFloat(sendAmount) < 0.001) {
      newErrors.amount = "Minimum amount is 0.001";
    } else if (parseFloat(sendAmount) > 1000000) {
      newErrors.amount = "Maximum amount is 1,000,000";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext();
    }
  };

  const handleSendCurrencyChange = (currency: Currency) => {
    setSendCurrency(currency.code);
  };

  const handleReceiveCurrencyChange = (currency: Currency) => {
    setReceiveCurrency(currency.code);
  };

  // Simple mock conversion rate
  const calculateReceiveAmount = () => {
    const amount = parseFloat(sendAmount) || 0;
    return (amount * 1500).toFixed(2); // Mock rate
  };

  return (
    <div className="space-y-5">
      <WidgetTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <AmountInput
        label="You send"
        amount={sendAmount}
        currencyCode={sendCurrency}
        onAmountChange={(value) => {
          setSendAmount(value);
          if (errors.amount) setErrors({});
        }}
        onCurrencyChange={handleSendCurrencyChange}
        filterType="crypto"
        error={errors.amount}
      />

      <AmountInput
        label="You receive"
        amount={calculateReceiveAmount()}
        currencyCode={receiveCurrency}
        onCurrencyChange={handleReceiveCurrencyChange}
        filterType="fiat"
        readOnly
      />

      <SelectField
        label="Pay from"
        placeholder="Select an option"
        error={!showPaymentMethods}
        onClick={() => setShowPaymentMethods(!showPaymentMethods)}
      />

      {showPaymentMethods && (
        <PaymentMethodSelect
          selectedId={paymentMethod}
          onSelect={setPaymentMethod}
        />
      )}

      <SelectField
        label="Pay to"
        placeholder="Select an option"
      />

      <button
        onClick={handleNext}
        className="w-full py-4 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
      >
        Convert now
      </button>
    </div>
  );
}

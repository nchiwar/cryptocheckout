import { useState } from "react";
import { InputField } from "./InputField";
import { PhoneInput } from "./PhoneInput";

interface RecipientContactStepProps {
  onNext: () => void;
}

export function RecipientContactStep({ onNext }: RecipientContactStepProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-card-foreground">Recipient details</h2>

      <InputField
        label="Recipient email"
        placeholder="Enter recipient email"
        value={email}
        onChange={setEmail}
        type="email"
      />

      <PhoneInput
        label="Recipient phone number"
        value={phone}
        onChange={setPhone}
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

import { useState } from "react";
import { WelcomeScreen } from "./widget/WelcomeScreen";
import { ConvertStep } from "./widget/ConvertStep";
import { RecipientStep } from "./widget/RecipientStep";
import { RecipientContactStep } from "./widget/RecipientContactStep";
import { SendCryptoStep } from "./widget/SendCryptoStep";
import { SuccessModal } from "./widget/SuccessModal";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "welcome" | "convert" | "recipient" | "contact" | "send" | "success";

export function PaymentWidget() {
  const [step, setStep] = useState<Step>("welcome");
  const [showSuccess, setShowSuccess] = useState(false);

  const getStepNumber = () => {
    switch (step) {
      case "convert": return 1;
      case "recipient": return 2;
      case "contact": return 3;
      case "send": return 4;
      default: return 0;
    }
  };

  const goBack = () => {
    switch (step) {
      case "convert": setStep("welcome"); break;
      case "recipient": setStep("convert"); break;
      case "contact": setStep("recipient"); break;
      case "send": setStep("contact"); break;
      default: break;
    }
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeScreen onGetStarted={() => setStep("convert")} />;
      case "convert":
        return <ConvertStep onNext={() => setStep("recipient")} />;
      case "recipient":
        return <RecipientStep onNext={() => setStep("contact")} />;
      case "contact":
        return <RecipientContactStep onNext={() => setStep("send")} />;
      case "send":
        return <SendCryptoStep onComplete={() => setShowSuccess(true)} />;
      default:
        return null;
    }
  };

  const showHeader = step !== "welcome";

  return (
    <>
      <div className="w-full max-w-md">
        <p className="text-muted-foreground mb-3 text-sm italic"></p>
        
        <div className="bg-card rounded-2xl shadow-widget overflow-hidden animate-fade-in">
      
          {showHeader && (
            <div className="flex items-center gap-3 p-4 border-b border-border">
              <button
                onClick={goBack}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-card-foreground" />
              </button>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={cn(
                      "w-8 h-1 rounded-full transition-colors",
                      num <= getStepNumber() ? "bg-primary" : "bg-muted"
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="p-5">
            {renderStep()}
          </div>
        </div>
      </div>

      {showSuccess && (
        <SuccessModal
          transactionId="NC123A67B9"
          onClose={() => {
            setShowSuccess(false);
            setStep("welcome");
          }}
        />
      )}
    </>
  );
}

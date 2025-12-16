import { ArrowRight, Wallet, CreditCard, Zap } from "lucide-react";

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="text-center space-y-6 py-4">
      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
        <Wallet className="w-8 h-8 text-primary" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-card-foreground">
          Welcome to CryptoSwap
        </h2>
        <p className="text-muted-foreground text-sm">
          Convert crypto to fiat instantly with the best rates
        </p>
      </div>

      <div className="space-y-3 text-left">
        <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">Instant Conversion</p>
            <p className="text-xs text-muted-foreground">Convert in seconds, not hours</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-3 bg-secondary rounded-xl">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-card-foreground">Multiple Payment Methods</p>
            <p className="text-xs text-muted-foreground">Bank transfer, mobile money & more</p>
          </div>
        </div>
      </div>

      <button
        onClick={onGetStarted}
        className="w-full py-4 px-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
      >
        Get Started
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

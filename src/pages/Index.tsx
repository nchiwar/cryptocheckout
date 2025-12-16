import { PaymentWidget } from "@/components/PaymentWidget";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Novacrust - Crypto Payment</title>
        <meta name="description" content="Convert crypto to fiat seamlessly with Novacrust payment widget. Fast, secure, and easy to use." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <PaymentWidget />
      </div>
    </>
  );
};

export default Index;

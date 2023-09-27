import React, { FunctionComponent, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";

type StripeProviderType = {
  children: ReactNode;
};

// Create a context to hold the Stripe instance
const StripeContext = createContext<Stripe | null>(null);

// Custom hook to access the Stripe instance
export function useStripe() {
  return useContext(StripeContext);
}

// StripeProvider component
export const StripeProvider: FunctionComponent<StripeProviderType> = ({ children }) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY ?? "");
      setStripe(stripeInstance);
    };

    initializeStripe();
  }, []);

  return <StripeContext.Provider value={stripe}>{children}</StripeContext.Provider>;
};

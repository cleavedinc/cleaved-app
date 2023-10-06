import React, { FunctionComponent } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { StripeProvider } from "../../contexts";

import { StripePricingTable } from "./components";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY ?? "");

export const MembershipPlansDataWrapper: FunctionComponent = () => {
  return (
    <StripeProvider>
      <Elements stripe={stripePromise}>
        <StripePricingTable />
      </Elements>
    </StripeProvider>
  );
};

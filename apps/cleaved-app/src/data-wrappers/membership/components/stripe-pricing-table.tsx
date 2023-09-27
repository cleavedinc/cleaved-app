import React, { FunctionComponent } from "react";
import { Elements } from "@stripe/react-stripe-js";

import { Box } from "@cleaved/ui";
import { useStripe } from "../../../contexts";

export const StripePricingTable: FunctionComponent = () => {
  const stripe = useStripe();

  return (
    <Elements stripe={stripe}>
      <Box>
        <stripe-pricing-table
          pricing-table-id="prctbl_1NubPzGP3PYNtNs6InzO5Njp"
          publishable-key={process.env.STRIPE_PUBLISHABLE_KEY}
        />
      </Box>
    </Elements>
  );
};

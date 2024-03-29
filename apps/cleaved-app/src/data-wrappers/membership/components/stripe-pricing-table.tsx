import React, { FunctionComponent } from "react";
import { Elements } from "@stripe/react-stripe-js";

import { Box } from "@cleaved/ui";
import { useStripe } from "../../../contexts";
import { useRouteParams } from "../../../hooks";

export const StripePricingTable: FunctionComponent = () => {
  const stripe = useStripe();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;

  return (
    <Elements stripe={stripe}>
      <Box>
        <stripe-pricing-table
          client-reference-id={organizationId}
          pricing-table-id={process.env.STRIPE_PRICING_TABLE_ID}
          publishable-key={process.env.STRIPE_PUBLISHABLE_KEY}
        />
      </Box>
    </Elements>
  );
};

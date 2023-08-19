import React, { FunctionComponent, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import styled, { useTheme } from "styled-components";

import { Box } from "@cleaved/ui";

import { CheckoutForm } from "../../forms";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const stripePromise = loadStripe("pk_test_VX53iabGnIXBis1UmYQsWQ7B00yqMWnlmT");

export const CheckoutDataWrapper: FunctionComponent = () => {
  const theme = useTheme();
  const [clientSecret, setClientSecret] = useState<string | undefined>("");

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: theme.colors.baseButtonLink_color,
      colorText: theme.colors.baseText_color,
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  // TODO: convert to gql query to set the clientSecret
  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  return (
    <StyledBox>
      membership plans outlined here.
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </StyledBox>
  );
};

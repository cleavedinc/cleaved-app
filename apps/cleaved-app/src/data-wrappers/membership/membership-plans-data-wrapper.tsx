import React, { FunctionComponent } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { HelperInfoHeaderTextImageRightBox } from "../../components";
import { StripeProvider } from "../../contexts";
import { StripePricingTable } from "./components";

import membershipPlansHelperImage from "../../media/helper-info/project-helper-image.svg";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY ?? "");

export const MembershipPlansDataWrapper: FunctionComponent = () => {
  return (
    <StripeProvider>
      <>
        <HelperInfoHeaderTextImageRightBox
          helperInfoImageAltText={"TEMP alt text"}
          helperInfoImageUrl={membershipPlansHelperImage}
          helperInfoText={"TEMP some helper text about the payment pricing page"}
          helperInfoTextHeader={"TEMP: Membership plans"}
          width={"250px"}
        />

        <Elements stripe={stripePromise}>
          <StripePricingTable />
        </Elements>
      </>
    </StripeProvider>
  );
};

import React, { FunctionComponent } from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { HelperInfoHeaderTextImageRightBox } from "../../components";
import { StripeProvider } from "../../contexts";
import { useTranslator } from "../../hooks";

import { StripePricingTable } from "./components";

import membershipPlansHelperImage from "../../media/helper-info/membership-plans.svg";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY ?? "");

export const MembershipPlansDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <StripeProvider>
      <>
        <HelperInfoHeaderTextImageRightBox
          helperInfoImageAltText={t("helperInformationBoxes.membershipPlansAlt")}
          helperInfoImageUrl={membershipPlansHelperImage}
          helperInfoText={t("helperInformationBoxes.membershipPlansText")}
          helperInfoTextHeader={t("helperInformationBoxes.membershipPlansHeader")}
          width={"250px"}
        />

        <Elements stripe={stripePromise}>
          <StripePricingTable />
        </Elements>
      </>
    </StripeProvider>
  );
};

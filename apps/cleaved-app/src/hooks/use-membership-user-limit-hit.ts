import { membershipLimits } from "../constants";
import { BillingTier } from "../generated-types/graphql";

export const useMembershipUserLimitHit = (
  billingTier: BillingTier | undefined,
  memberCount: number | undefined
): boolean => {
  switch (billingTier) {
    case BillingTier.Professional:
      return memberCount ? memberCount >= membershipLimits.professionalPlan.userlimit : false;
      break;
    case BillingTier.Growth:
      return memberCount ? memberCount >= membershipLimits.growthPlan.userlimit : false;
      break;
    case BillingTier.Free:
    default:
      return memberCount ? memberCount >= membershipLimits.freePlan.userlimit : false;
  }
};

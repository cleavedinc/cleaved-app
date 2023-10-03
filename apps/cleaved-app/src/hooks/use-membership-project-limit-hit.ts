import { membershipLimits } from "../constants";
import { BillingTier } from "../generated-types/graphql";

export const useMembershipProjectLimitHit = (
  billingTier: BillingTier | undefined,
  projectCount: number | undefined
): boolean => {
  switch (billingTier) {
    case BillingTier.Professional:
      return projectCount ? projectCount >= membershipLimits.professionalPlan.projectlimit : false;
      break;
    case BillingTier.Free:
    default:
      return projectCount ? projectCount >= membershipLimits.freePlan.projectlimit : false;
  }
};

// This is temporary and should be moved to the backend at some point.
export type MembershipLimitsType = {
  freePlan: {
    userlimit: number;
  };
  professionalPlan: {
    userlimit: number;
  };
  growthPlan: {
    userlimit: number;
  };
};

export const membershipLimits: MembershipLimitsType = {
  freePlan: {
    userlimit: 3,
  },
  professionalPlan: {
    userlimit: 10,
  },
  growthPlan: {
    userlimit: 20,
  },
};

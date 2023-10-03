// This is temporary and should be moved to the backend at some point.
export type MembershipLimitsType = {
  freePlan: {
    projectlimit: number;
    userlimit: number;
  };
  professionalPlan: {
    projectlimit: number;
    userlimit: number;
  };
};

export const membershipLimits: MembershipLimitsType = {
  freePlan: {
    projectlimit: 3,
    userlimit: 5,
  },
  professionalPlan: {
    projectlimit: 12,
    userlimit: 20,
  },
};

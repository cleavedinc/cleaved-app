import React, { FunctionComponent } from "react";

import { Box } from "@cleaved/ui";

import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { MembershipData } from "./components";

export const MembershipLimitDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const { t } = useTranslator();

  if (!hasPermission) {
    return (
      <Box>
        <div>{t("membership.membershipLimitNonAdminText")}</div>
      </Box>
    );
  }

  return <MembershipData />;
};

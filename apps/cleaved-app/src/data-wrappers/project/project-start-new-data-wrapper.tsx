import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { ProjectStartNewForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const ProjectStartNewDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { t } = useTranslator();

  return (
    <Box>
      <StyledH1>{t("projectStartNew.startNewProject")}</StyledH1>

      {hasPermission && <ProjectStartNewForm />}
    </Box>
  );
};

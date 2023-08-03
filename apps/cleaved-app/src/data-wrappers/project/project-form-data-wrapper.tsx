import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { ProjectForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const ProjectFormDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const projectId = routeParams.projectId;
  const { t } = useTranslator();

  return (
    <Box>
      <StyledH1>{t("projectForm.startNewProject")}</StyledH1>

      {hasPermission && <ProjectForm organizationId={organizationId} projectId={projectId} />}
    </Box>
  );
};

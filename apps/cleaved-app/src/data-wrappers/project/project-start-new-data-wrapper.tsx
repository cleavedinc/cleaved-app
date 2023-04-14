import React, { FunctionComponent, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { ProjectStartNewForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const ProjectStartNewDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  // route to the home page if the user makes it to this page somehow
  useEffect(() => {
    if (!hasPermission) {
      navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    }
  }, []); // eslint-disable-line

  return (
    <Box>
      <StyledH1>{t("projectStartNew.startNewProject")}</StyledH1>

      {hasPermission && <ProjectStartNewForm />}
    </Box>
  );
};

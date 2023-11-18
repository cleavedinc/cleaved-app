import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SPACING } from "@cleaved/ui";

import { OrganizationCardMetaData } from "../../../components";
// import { authTokenContext } from "../../../contexts";
import { OrgPermissionLevel, OrganizationListAdminQuery } from "../../../generated-types/graphql";
// import { useOrganizationPermission } from "../../../permissions";
// import { routeConstantsCleavedApp } from "../../../router";

type OrganizationCardProps = {
  organization: OrganizationListAdminQuery["organizationListAdmin"][0];
  refetchData: (() => void) | undefined;
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACING.BASE};
`;

// const StyledMenuContentEdit = styled.div`
//   margin-left: auto;
// `;

const StyledOrganizationCardBox = styled(Box)`
  width: 100%;
`;

// const StyledProjectLink = styled(Link)`
//   font-size: ${FONT_SIZES.LARGE};
// `;

export const OrganizationCard: FunctionComponent<OrganizationCardProps> = (props) => {
  const { organization, refetchData } = props;
  //   const { preferredOrgId } = useContext(authTokenContext);

  return (
    <StyledOrganizationCardBox>
      <StyledHeadingWrapper>
        {/* <StyledProjectLink
          to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${project.id}${routeConstantsCleavedApp.projectBoard.route}`}
          title={project.name}
        >
          {project.name}
        </StyledProjectLink> */}
        {organization.name}

        {/* <StyledMenuContentEdit>
          <ProjectsEditMenu
            projectId={project.id}
            projectStatus={project.status}
            refreshProjectListData={refetchData}
          />
        </StyledMenuContentEdit> */}
      </StyledHeadingWrapper>

      {organization && <OrganizationCardMetaData organizationData={organization} />}
    </StyledOrganizationCardBox>
  );
};

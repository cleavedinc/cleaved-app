import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";

import { BoxNoPadding, ButtonLink, SPACING, WidgetHeadingWrapper } from "@cleaved/ui";

import { ProjectCardMetaData, WidgetProjectDetailsMenu } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useProjectById, useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledButtonLink = styled(ButtonLink)`
  margin-left: ${SPACING.SMALL};
`;

const StyledProjectDetails = styled.div`
  padding: ${SPACING.SMALL};
  white-space: pre-wrap;
`;

const StyledWidgetHeader = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const routeParams = useRouteParams();
  const projectId = routeParams.projectId;
  const { projectByIdData, projectByIdDataLoading } = useProjectById(projectId);
  const [showMoreProjectDescription, setShowMoreProjectDescription] = useState(false);
  const projectDetailsText = projectByIdData?.projectDetails;
  const projectDetailsMaxChars = 200;
  const projectDetailsTextShowAll = projectDetailsText && projectDetailsText?.length <= projectDetailsMaxChars;
  const { t } = useTranslator();

  return (
    <BoxNoPadding>
      <div>
        <WidgetHeadingWrapper>
          {!projectByIdDataLoading && projectByIdData?.name && (
            <StyledWidgetHeader>{projectByIdData?.name}</StyledWidgetHeader>
          )}

          {hasPermission && <WidgetProjectDetailsMenu />}
        </WidgetHeadingWrapper>

        {!projectByIdDataLoading && projectByIdData && <ProjectCardMetaData projectData={projectByIdData} />}
      </div>

      {!projectByIdDataLoading && projectByIdData && projectDetailsText && (
        <StyledProjectDetails>
          {projectDetailsTextShowAll && <>{projectDetailsText}</>}

          {!projectDetailsTextShowAll && (
            <>
              {showMoreProjectDescription
                ? projectDetailsText
                : `${projectDetailsText?.substring(0, projectDetailsMaxChars)}`}

              <StyledButtonLink onClick={() => setShowMoreProjectDescription(!showMoreProjectDescription)}>
                {showMoreProjectDescription ? t("showLess") : t("showMore")}
              </StyledButtonLink>
            </>
          )}
        </StyledProjectDetails>
      )}
    </BoxNoPadding>
  );
};

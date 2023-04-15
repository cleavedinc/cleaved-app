import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import {
  mediaQueries,
  SPACING,
  StyledTable,
  StyledTBody,
  StyledTh,
  StyledTHeadTr,
  StyledTHead,
  StyledTr,
} from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, StyledRouterButton, StyledRouterButtonLink } from "../../components";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationSeekMembers, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import { TeamsListRow } from "./teams-list-row";

const StyledInviteMorePeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${SPACING.XLARGE} 0 ${SPACING.XXXLARGE};
  text-align: center;

  ${mediaQueries.SM_MD} {
    margin: ${SPACING.XLARGE} 0;
  }
`;

const StyledAddPeopleText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledRouterButtonRight = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledTeamListHeader = styled.div`
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-top: ${SPACING.SMALL};
  }
`;

const StyledThRight = styled(StyledTh)`
  &:nth-child(2) {
    padding-right: ${SPACING.MEDIUM};
    text-align: end;
  }
`;

const StyledTrWrapper = styled(StyledTr)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-bottom: ${SPACING.LARGE};
  }
`;

export const TeamsListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationSeekMembersData, organizationSeekMembersDataLoading, organizationSeekMembersDataRefetch } =
    useOrganizationSeekMembers(null, 20);
  const { t } = useTranslator();

  const professionalInviteLinkName = t("menuLinkNames.professionalInvite") ? t("menuLinkNames.professionalInvite") : "";

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.teamsAlt")}
        helperInfoImageUrl={"/helper-info/people-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.teamsText")}
        helperInfoTextHeader={t("helperInformationBoxes.teamsHeader")}
        width={"400px"}
      />

      {hasPermission && (
        <StyledTeamListHeader>
          <StyledRouterButtonRight
            to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
            title={professionalInviteLinkName}
          >
            {t("teams.addNewTeamMember")}
          </StyledRouterButtonRight>
        </StyledTeamListHeader>
      )}

      {!organizationSeekMembersDataLoading && organizationSeekMembersData && organizationSeekMembersData?.length > 0 && (
        <StyledTable role="table">
          <StyledTHead role="rowgroup">
            <StyledTHeadTr role="row">
              <StyledTh role="columnheader">{t("teams.professionalName")}</StyledTh>
              <StyledThRight role="columnheader">{t("teams.professionalPermissions")}</StyledThRight>
              {hasPermission && <StyledTh role="columnheader">{t("teams.edit")}</StyledTh>}
            </StyledTHeadTr>
          </StyledTHead>
          <StyledTBody role="rowgroup">
            {organizationSeekMembersData.map((member) => {
              return (
                <StyledTrWrapper key={member.id} role="row">
                  <TeamsListRow
                    member={member}
                    organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch}
                  />
                </StyledTrWrapper>
              );
            })}
          </StyledTBody>
        </StyledTable>
      )}

      {hasPermission &&
        !organizationSeekMembersDataLoading &&
        organizationSeekMembersData &&
        organizationSeekMembersData?.length > 0 && (
          <StyledInviteMorePeopleWrapper>
            <StyledAddPeopleText>{t("teams.addNewTeamMemberHelperText")}</StyledAddPeopleText>

            <StyledRouterButtonLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
              title={professionalInviteLinkName}
            >
              {t("teams.addNewTeamMember")}
            </StyledRouterButtonLink>
          </StyledInviteMorePeopleWrapper>
        )}
    </>
  );
};

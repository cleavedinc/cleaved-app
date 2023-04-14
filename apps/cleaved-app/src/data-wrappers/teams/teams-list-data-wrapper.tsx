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
import { useOrganizationSeekMembers, useTranslator } from "../../hooks";
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

const StyledRouterButtonLeft = styled(StyledRouterButton)`
  margin-left: auto;
`;

const StyledTeamListHeader = styled.div`
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-top: ${SPACING.SMALL};
  }
`;

export const TeamsListDataWrapper: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationSeekMembersData, organizationSeekMembersDataLoading, organizationSeekMembersDataRefetch } =
    useOrganizationSeekMembers(null, 20);
  const { t } = useTranslator();

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.teamsAlt")}
        helperInfoImageUrl={"/helper-info/people-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.teamsText")}
        helperInfoTextHeader={t("helperInformationBoxes.teamsHeader")}
        width={"400px"}
      />

      <StyledTeamListHeader>
        <StyledRouterButtonLeft
          to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
          title={routeConstantsCleavedApp.professionalInvite.name}
        >
          {t("teams.addNewTeamMember")}
        </StyledRouterButtonLeft>
      </StyledTeamListHeader>

      {!organizationSeekMembersDataLoading && organizationSeekMembersData && organizationSeekMembersData?.length > 0 && (
        <StyledTable role="table">
          <StyledTHead role="rowgroup">
            <StyledTHeadTr role="row">
              <StyledTh role="columnheader">{t("teams.professionalName")}</StyledTh>
              <StyledTh role="columnheader">{t("teams.professionalPermissions")}</StyledTh>
              <StyledTh role="columnheader">{t("teams.edit")}</StyledTh>
            </StyledTHeadTr>
          </StyledTHead>
          <StyledTBody role="rowgroup">
            {organizationSeekMembersData.map((member) => {
              return (
                <StyledTr key={member.id} role="row">
                  <TeamsListRow
                    member={member}
                    organizationSeekMembersDataRefetch={organizationSeekMembersDataRefetch}
                  />
                </StyledTr>
              );
            })}
          </StyledTBody>
        </StyledTable>
      )}

      {!organizationSeekMembersDataLoading && organizationSeekMembersData && organizationSeekMembersData?.length > 0 && (
        <StyledInviteMorePeopleWrapper>
          <StyledAddPeopleText>{t("teams.addNewTeamMemberHelperText")}</StyledAddPeopleText>

          <StyledRouterButtonLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
            title={routeConstantsCleavedApp.professionalInvite.name}
          >
            {t("teams.addNewTeamMember")}
          </StyledRouterButtonLink>
        </StyledInviteMorePeopleWrapper>
      )}
    </>
  );
};

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

import { PeopleListRow } from "./people-list-row";

import peopleHelperImage from "../../media/helper-info/people-helper-image.svg";

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

const StyledPeopleListHeader = styled.div`
  display: flex;
  margin: ${SPACING.XLARGE} 0 ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin: ${SPACING.LARGE} ${SPACING.SMALL} ${SPACING.MEDIUM} 0;
  }
`;

const StyledTrWrapper = styled(StyledTr)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-bottom: ${SPACING.LARGE};
  }
`;

export const PeopleListDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationSeekMembersData, organizationSeekMembersDataLoading, organizationSeekMembersDataRefetch } =
    useOrganizationSeekMembers(null, 500); // If we need to change this to a higher # or lazy load users, we're doing alright!!!
  const { t } = useTranslator();

  const professionalInviteLinkName = t("menuLinkNames.professionalInvite") ? t("menuLinkNames.professionalInvite") : "";

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.peopleAlt")}
        helperInfoImageUrl={peopleHelperImage}
        helperInfoText={t("helperInformationBoxes.peopleText")}
        helperInfoTextHeader={t("helperInformationBoxes.peopleHeader")}
        width={"250px"}
      />

      {hasPermission && (
        <StyledPeopleListHeader>
          <StyledRouterButtonRight
            to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
            title={professionalInviteLinkName}
          >
            {t("people.addNewUser")}
          </StyledRouterButtonRight>
        </StyledPeopleListHeader>
      )}

      {!organizationSeekMembersDataLoading &&
        organizationSeekMembersData &&
        organizationSeekMembersData?.length > 0 && (
          <StyledTable role="table">
            <StyledTHead role="rowgroup">
              <StyledTHeadTr role="row">
                <StyledTh role="columnheader">{t("people.professionalName")}</StyledTh>
                <StyledTh role="columnheader">{t("people.jobTitle")}</StyledTh>
                <StyledTh role="columnheader">{t("people.professionalPermissions")}</StyledTh>
                {hasPermission && <StyledTh role="columnheader">{t("people.edit")}</StyledTh>}
              </StyledTHeadTr>
            </StyledTHead>
            <StyledTBody role="rowgroup">
              {organizationSeekMembersData.map((member) => {
                return (
                  <StyledTrWrapper key={member.id} role="row">
                    <PeopleListRow
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
            <StyledAddPeopleText>{t("people.addNewUserHelperText")}</StyledAddPeopleText>

            <StyledRouterButtonLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.professionalInvite.route}`}
              title={professionalInviteLinkName}
            >
              {t("people.addNewUser")}
            </StyledRouterButtonLink>
          </StyledInviteMorePeopleWrapper>
        )}
    </>
  );
};

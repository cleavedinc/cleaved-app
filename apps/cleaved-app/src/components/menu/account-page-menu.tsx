import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { BORDERS, COLORS, isMenuItemActive, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";
import { useOrganizationPermission } from "../../permissions";

const StyledMenuLink = styled(Link)`
  color: ${COLORS.BLACK};
  display: flex;

  :hover {
    color: ${COLORS.BLACK};
  }
`;

const StyledMenuList = styled.ul``;

const StyledMenuListItem = styled.li`
  cursor: pointer;
  padding: ${SPACING.SMALL};

  :hover {
    background-color: ${COLORS.GRAY_50};
  }

  :not(:last-child) {
    border-bottom: ${BORDERS.BORDER_PRIMARY};
  }
`;

const StyledMenuName = styled.div``;

export const AccountPageMenu: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const accountMembershipLinkName = t("menuLinkNames.accountMembership") ? t("menuLinkNames.accountMembership") : "";
  const accountOrganizationsLinkName = t("menuLinkNames.accountOrganizations")
    ? t("menuLinkNames.accountOrganizations")
    : "";
  const accountPersonalInformationLinkName = t("menuLinkNames.accountPersonalInformation")
    ? t("menuLinkNames.accountPersonalInformation")
    : "";
  const accountProfessionalInformationLinkName = t("menuLinkNames.accountProfessionalInformation")
    ? t("menuLinkNames.accountProfessionalInformation")
    : "";

  return (
    <StyledMenuList>
      <StyledMenuListItem>
        <StyledMenuLink
          getProps={isMenuItemActive}
          to={`/${preferredOrgId}${routeConstantsCleavedApp.accountPersonalInformation.route}`}
          title={accountPersonalInformationLinkName}
        >
          <StyledMenuName>{accountPersonalInformationLinkName}</StyledMenuName>
        </StyledMenuLink>
      </StyledMenuListItem>

      <StyledMenuListItem>
        <StyledMenuLink
          getProps={isMenuItemActive}
          to={`/${preferredOrgId}${routeConstantsCleavedApp.accountProfessionalInformation.route}`}
          title={accountProfessionalInformationLinkName}
        >
          <StyledMenuName>{accountProfessionalInformationLinkName}</StyledMenuName>
        </StyledMenuLink>
      </StyledMenuListItem>

      {hasPermission && (
        <StyledMenuListItem>
          <StyledMenuLink
            getProps={isMenuItemActive}
            to={`/${preferredOrgId}${routeConstantsCleavedApp.accountOrganizations.route}`}
            title={accountOrganizationsLinkName}
          >
            <StyledMenuName>{accountOrganizationsLinkName}</StyledMenuName>
          </StyledMenuLink>
        </StyledMenuListItem>
      )}

      {hasPermission && (
        <StyledMenuListItem>
          <StyledMenuLink
            getProps={isMenuItemActive}
            to={`/${preferredOrgId}${routeConstantsCleavedApp.accountMembership.route}`}
            title={accountMembershipLinkName}
          >
            <StyledMenuName>{accountMembershipLinkName}</StyledMenuName>
          </StyledMenuLink>
        </StyledMenuListItem>
      )}
    </StyledMenuList>
  );
};

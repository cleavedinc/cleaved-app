import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsCleavedApp } from "../../router";
import {
  buttonBase,
  buttonPrimaryBase,
  COLORS,
  FONT_SIZES,
  mediaQueries,
  SPACING,
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTHeadTr,
  StyledTHead,
  StyledTr,
} from "@cleaved/ui";

import { HelperInfoHeaderTextImageRightBox, OrganizationEditMenu } from "../../components";
import { authTokenContext, OrganizationMembershipsContext } from "../../contexts";
import { useTranslator } from "../../hooks";

const StyledRegisterOrgLink = styled(Link)`
  ${buttonBase}
  ${buttonPrimaryBase}
  margin-left: auto;

  :hover {
    color: ${COLORS.WHITE};
  }
`;

const StyledOrgActiveTag = styled.span`
  color: ${COLORS.GREEN_500};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledOrganizationsHeader = styled.div`
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    margin-top: ${SPACING.SMALL};
  }
`;

const StyledTdWithMenuContentNameColumn = styled(StyledTd)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Organization";
    }
  }
`;

const StyledTdWithMenuContentEditColumn = styled(StyledTd)`
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(2):before {
      content: "Edit";
    }
  }
`;

export const OrganizationListDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationMembershipsData, organizationMembershipsDataLoading } =
    useContext(OrganizationMembershipsContext);

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.organizationsAlt")}
        helperInfoImageUrl={"/helper-info/organizations-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.organizationsText")}
        helperInfoTextHeader={t("helperInformationBoxes.organizationsHeader")}
        width={"400px"}
      />

      <StyledOrganizationsHeader>
        <StyledRegisterOrgLink
          to={`/${preferredOrgId}${routeConstantsCleavedApp.organizationRegister.route}`}
          title={routeConstantsCleavedApp.organizationRegister.name}
        >
          {t("organizations.organizationRegister")}
        </StyledRegisterOrgLink>
      </StyledOrganizationsHeader>

      {!organizationMembershipsDataLoading && organizationMembershipsData && organizationMembershipsData.length > 0 && (
        <StyledTable role="table">
          <StyledTHead role="rowgroup">
            <StyledTHeadTr role="row">
              <StyledTh role="columnheader">{t("organizations.organizationName")}</StyledTh>
              <StyledTh role="columnheader">{t("organizations.edit")}</StyledTh>
            </StyledTHeadTr>
          </StyledTHead>
          <StyledTBody role="rowgroup">
            {!organizationMembershipsDataLoading &&
              organizationMembershipsData.map((org) => {
                return (
                  <StyledTr key={org.id} role="row">
                    <StyledTdWithMenuContentNameColumn role="cell">
                      {org.name}{" "}
                      {preferredOrgId && preferredOrgId === org.id && <StyledOrgActiveTag>(active)</StyledOrgActiveTag>}
                    </StyledTdWithMenuContentNameColumn>
                    <StyledTdWithMenuContentEditColumn role="cell">
                      <OrganizationEditMenu orgId={org.id} />
                    </StyledTdWithMenuContentEditColumn>
                  </StyledTr>
                );
              })}
          </StyledTBody>
        </StyledTable>
      )}
    </>
  );
};

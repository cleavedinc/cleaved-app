import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import {
  Box,
  COLORS,
  FONT_SIZES,
  HeadingWrapper,
  mediaQueries,
  SectionHeader,
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTHeadTr,
  StyledTHead,
  StyledTr,
} from "@cleaved/ui";

import { AccountOrganizationsMenu, HelperInfoHeaderTextImageRightBox, OrganizationEditMenu } from "../../components";
import { authTokenContext, OrganizationMembershipsContext } from "../../contexts";
import { useTranslator } from "../../hooks";

const StyledOrgActiveTag = styled.span`
  color: ${COLORS.GREEN_500};
  font-size: ${FONT_SIZES.XSMALL};
`;

const StyledTdWithMenuContentNameColumn = styled(StyledTd)`
  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Your organizations";
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

export const AccountOrganizationListDataWrapper: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationMembershipsData, organizationMembershipsDataLoading } =
    useContext(OrganizationMembershipsContext);
  const { t } = useTranslator();

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.organizationsAlt")}
        helperInfoImageUrl={"/helper-info/organizations-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.organizationsText")}
        helperInfoTextHeader={t("helperInformationBoxes.organizationsHeader")}
        width={"250px"}
      />

      <Box>
        <HeadingWrapper>
          <SectionHeader>{t("organizations.organizations")}</SectionHeader>
          <AccountOrganizationsMenu />
        </HeadingWrapper>

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
                        {preferredOrgId && preferredOrgId === org.id && (
                          <StyledOrgActiveTag>(active)</StyledOrgActiveTag>
                        )}
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
      </Box>
    </>
  );
};

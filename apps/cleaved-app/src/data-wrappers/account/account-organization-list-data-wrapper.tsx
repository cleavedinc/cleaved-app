import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import {
  Box,
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

import { OrganizationEditMenu } from "../../components";
import { authTokenContext } from "../../contexts";
import { useOrganizationMemberships, useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledOrgActiveTag = styled.span`
  color: ${({ theme }) => theme.colors.baseApproved_color};
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
  const organizationMemberships = useOrganizationMemberships();
  const { t } = useTranslator();

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("organizations.organizations")}</SectionHeader>
      </HeadingWrapper>

      {!organizationMemberships.loading &&
        organizationMemberships.data?.organizationMemberships &&
        organizationMemberships.data.organizationMemberships.length > 0 && (
          <StyledTable role="table">
            <StyledTHead role="rowgroup">
              <StyledTHeadTr role="row">
                <StyledTh role="columnheader">{t("organizations.organizationName")}</StyledTh>
                <StyledTh role="columnheader">{t("organizations.edit")}</StyledTh>
              </StyledTHeadTr>
            </StyledTHead>
            <StyledTBody role="rowgroup">
              {organizationMemberships.data.organizationMemberships.map((org) => {
                return (
                  <StyledTr key={org.id} role="row">
                    <StyledTdWithMenuContentNameColumn role="cell">
                      {org.name}{" "}
                      {preferredOrgId && preferredOrgId === org.id && (
                        <StyledOrgActiveTag>({t("active")})</StyledOrgActiveTag>
                      )}
                    </StyledTdWithMenuContentNameColumn>
                    {!organizationMemberships.loading &&
                      organizationMemberships.data?.organizationMemberships &&
                      organizationMemberships.data.organizationMemberships.length > 1 && (
                        <StyledTdWithMenuContentEditColumn role="cell">
                          <OrganizationEditMenu orgId={org.id} />
                        </StyledTdWithMenuContentEditColumn>
                      )}
                  </StyledTr>
                );
              })}
            </StyledTBody>
          </StyledTable>
        )}
    </StyledBox>
  );
};

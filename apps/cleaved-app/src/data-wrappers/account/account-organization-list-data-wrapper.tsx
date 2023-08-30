import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, HeadingWrapper, SectionHeader } from "@cleaved/ui";

import { OrganizationEditMenu } from "../../components";
import { useOrganizationMemberships, useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledOrganizationWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const AccountOrganizationListDataWrapper: FunctionComponent = () => {
  const { organizationMembershipsData, organizationMembershipsDataLoading } = useOrganizationMemberships();
  const { t } = useTranslator();

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("organizations.organization")}</SectionHeader>
      </HeadingWrapper>

      {!organizationMembershipsDataLoading && organizationMembershipsData && organizationMembershipsData.length > 0 && (
        <>
          {organizationMembershipsData.map((org) => {
            return (
              <StyledOrganizationWrapper key={org.id}>
                {org.name}
                <OrganizationEditMenu orgId={org.id} />
              </StyledOrganizationWrapper>
            );
          })}
        </>
      )}
    </StyledBox>
  );
};

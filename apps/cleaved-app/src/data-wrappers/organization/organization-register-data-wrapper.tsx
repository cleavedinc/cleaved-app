import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { OrganizationRegisterForm } from "../../forms";
import { useTranslator } from "../../hooks";

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const OrganizationRegisterDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <Box>
      <StyledH1>{t("organizationsStartNew.registerNewOrganization")}</StyledH1>

      <OrganizationRegisterForm />
    </Box>
  );
};

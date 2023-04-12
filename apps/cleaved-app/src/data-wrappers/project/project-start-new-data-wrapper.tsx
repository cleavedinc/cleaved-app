import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, H1, SPACING } from "@cleaved/ui";

import { ProjectStartNewForm } from "../../forms";
import { useTranslator } from "../../hooks";

const StyledH1 = styled(H1)`
  margin-bottom: ${SPACING.MEDIUM};
`;

export const ProjectStartNewDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <Box>
      <StyledH1>{t("projectStartNew.startNewProject")}</StyledH1>

      <ProjectStartNewForm />
    </Box>
  );
};

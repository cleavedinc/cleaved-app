import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, SectionHeader, SPACING } from "@cleaved/ui";

import { WidgetProjectDetailsMenu } from "../../components";

const StyledSectionHeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.SMALL};
`;

const StyledProjectDetails = styled.div``;

export const WidgetProjectDetailsDataWrapper: FunctionComponent = () => {
  return (
    <Box>
      <StyledSectionHeaderWrapper>
        <SectionHeader>temp. Project Name initiative thing</SectionHeader>

        <WidgetProjectDetailsMenu />
      </StyledSectionHeaderWrapper>

      <StyledProjectDetails>
        <p>temp. Project details, here are the project details here. Make these count at a high level.</p>
        <p>
          Here are some other facts. These facts are also important. Facts are what make facts so factual. I do think
          this is a fact.
        </p>
        <p>A couple other things to keep in mind. one thing. Another thing.</p>
      </StyledProjectDetails>
    </Box>
  );
};

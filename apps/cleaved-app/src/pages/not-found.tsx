import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, ContentWrapper, FONT_SIZES, MainColumnMaxWidthWrapper, SearchIcon, SPACING } from "@cleaved/ui";

import { useTranslator } from "../hooks";

const StyledSearchIcon = styled(SearchIcon)`
  margin-right: ${SPACING.MEDIUM};
`;

export const NotFound: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <Box>
          <StyledSearchIcon iconSize={FONT_SIZES.LARGE} />
          {t("notFound.pageMessage")}
        </Box>
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};

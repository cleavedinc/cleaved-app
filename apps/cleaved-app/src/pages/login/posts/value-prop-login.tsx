import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, HeroValuePropositionByline, mediaQueries, SPACING } from "@cleaved/ui";

import { GoogleLoginWrapper } from "../../../components/login/google-login";
import { useTranslator } from "../../../hooks";

const StyledHeroValueProposition = styled(HeroValuePropositionByline)`
  font-size: 1.8rem;
  margin-bottom: ${SPACING.MEDIUM};
  text-align: center;

  ${mediaQueries.SM} {
    font-size: 2.3rem;
  }
`;

const StyledHeroValuePropositionByline = styled(HeroValuePropositionByline)`
  font-size: ${FONT_SIZES.MEDIUM};
  margin-bottom: ${SPACING.XXLARGE};
  text-align: center;

  ${mediaQueries.SM} {
    font-size: ${FONT_SIZES.LARGE};
  }
`;

const StyledLoginButtonHelperText = styled.div`
  font-size: ${FONT_SIZES.SMALL};
  font-style: italic;
  margin-top: ${SPACING.SMALL};
  text-align: center;

  ${mediaQueries.SM} {
    /* font-size: ${FONT_SIZES.LARGE}; */
  }
`;

const StyledPostImage = styled.img`
  cursor: pointer;
  height: 100%;
  margin-top: ${SPACING.LARGE};
  object-position: top left;
  object-fit: cover;
  width: 100%;
`;

const StyledValuePropLogInWrapper = styled(Box)`
  align-items: center;
  background: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ValuePropLogin: FunctionComponent = () => {
  const { t } = useTranslator();
  const valuePropositionLoginImageAlt = t("loginPage.valuePropositionLoginImageAlt")
    ? t("loginPage.valuePropositionLoginImageAlt")
    : "";

  return (
    <StyledValuePropLogInWrapper>
      <StyledHeroValueProposition>
        {t("loginPage.valuePropositionFirstLine")}
        <br />
        {t("loginPage.valuePropositionSecondLine")}
      </StyledHeroValueProposition>

      <StyledHeroValuePropositionByline>
        {t("loginPage.valuePropositionSupportingText")}
      </StyledHeroValuePropositionByline>

      <GoogleLoginWrapper />
      <StyledLoginButtonHelperText>(no credit card needed)</StyledLoginButtonHelperText>

      <StyledPostImage src={"/helper-info/sign-up-arrows.svg"} alt={valuePropositionLoginImageAlt} />
    </StyledValuePropLogInWrapper>
  );
};

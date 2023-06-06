import React, { FunctionComponent, useContext } from "react";
import styled, { useTheme } from "styled-components";

import {
  BORDERS,
  Box,
  GlobeIcon,
  HeadingWrapper,
  removeDefaultButtonStyles,
  RADIUS,
  SectionHeader,
  SPACING,
  Toggle,
} from "@cleaved/ui";

import { ThemeContext } from "../../contexts";
import { PersonalInformationForm } from "../../forms";
import { useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledLanguageButton = styled.button`
  ${removeDefaultButtonStyles}
  align-items: center;
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.SMALL};
  display: flex;
  justify-content: center;
  margin-right: ${SPACING.SMALL};
  min-width: 100px;
  padding: ${SPACING.SMALL} ${SPACING.SMALL};

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledLanguageButtonText = styled.div`
  color: ${({ theme }) => theme.colors.baseButtonLink_color};
  margin-left: ${SPACING.SMALL};
`;

const StyledLanguageWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledLanguageLabel = styled.div`
  margin: 0 0 ${SPACING.MEDIUM};
`;

const StyledToggle = styled(Toggle)`
  margin-bottom: ${SPACING.LARGE};
`;

export const AccountPersonalInformationDataWrapper: FunctionComponent = () => {
  const { isDarkTheme, setThemeMode } = useContext(ThemeContext);
  const theme = useTheme();
  const { i18n, t } = useTranslator();

  const darkModeLabel = t("settings.darkMode") ? t("settings.darkMode") : "";

  const changeLanguageHandler = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <StyledBox>
        <PersonalInformationForm />
      </StyledBox>

      <StyledBox>
        <HeadingWrapper>
          <SectionHeader>{t("hTags.theme")}</SectionHeader>
        </HeadingWrapper>

        <StyledToggle
          callback={() => setThemeMode()}
          label={darkModeLabel}
          isChecked={isDarkTheme ? true : false}
          offColor={theme.colors.baseBordersAndShadows_color}
          onColor={theme.colors.baseApproved_color}
        />

        <StyledLanguageLabel>{t("language.languageSelectionHeader")}</StyledLanguageLabel>

        <StyledLanguageWrapper>
          <StyledLanguageButton onClick={() => changeLanguageHandler("en")} type="button">
            <GlobeIcon color={theme.colors.baseIcon_color} />
            <StyledLanguageButtonText>{t("language.english")}</StyledLanguageButtonText>
          </StyledLanguageButton>

          <StyledLanguageButton onClick={() => changeLanguageHandler("es")} type="button">
            <GlobeIcon color={theme.colors.baseIcon_color} />
            <StyledLanguageButtonText>{t("language.spanish")}</StyledLanguageButtonText>
          </StyledLanguageButton>
        </StyledLanguageWrapper>
      </StyledBox>
    </>
  );
};

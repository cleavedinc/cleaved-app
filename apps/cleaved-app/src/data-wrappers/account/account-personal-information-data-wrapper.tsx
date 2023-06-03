import React, { FunctionComponent, useContext } from "react";
import styled, { useTheme } from "styled-components";

import { Box, HeadingWrapper, SectionHeader, Toggle } from "@cleaved/ui";

import { ThemeContext } from "../../contexts";
import { PersonalInformationForm } from "../../forms";
import { useTranslator } from "../../hooks";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledToggle = styled(Toggle)``;

export const AccountPersonalInformationDataWrapper: FunctionComponent = () => {
  const { isDarkTheme, setThemeMode } = useContext(ThemeContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const darkModeLabel = t("settings.darkMode") ? t("settings.darkMode") : "";

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
      </StyledBox>
    </>
  );
};

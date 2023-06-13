import React, { FunctionComponent, useContext, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import styled, { useTheme } from "styled-components";

import { Box, HeadingWrapper, SectionHeader, SPACING, Toggle } from "@cleaved/ui";

import { ThemeContext } from "../../contexts";
import { PersonalInformationForm } from "../../forms";
import { useTranslator } from "../../hooks";

type LanguageOptionsType = {
  value: string;
  label: string;
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
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
  const colorTheme = useTheme();
  const { i18n, t } = useTranslator();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);
  const [currentLanguageObject, setCurrentLanguageObject] = useState<LanguageOptionsType | undefined | null>(null);
  const darkModeLabel = t("settings.darkMode") ? t("settings.darkMode") : "";
  const currentlanguage = i18n.language;

  const languageOptions: readonly LanguageOptionsType[] = useMemo(
    () => [
      { value: "en", label: t("language.english") },
      { value: "es", label: t("language.spanish") },
    ],
    [currentlanguage]
  );

  const handleLanguageChange = (selectedLanguage: LanguageOptionsType | null) => {
    if (selectedLanguage) {
      setCurrentLanguage(selectedLanguage.value);
      i18n.changeLanguage(selectedLanguage.value);
    }
  };

  useEffect(() => {
    const languageObject = languageOptions.find((x: LanguageOptionsType) => x.value === currentLanguage);
    setCurrentLanguageObject(languageObject);
  }, [currentLanguage, languageOptions]);

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
          offColor={colorTheme.colors.baseBordersAndShadows_color}
          onColor={colorTheme.colors.baseApproved_color}
        />

        <StyledLanguageLabel>{t("language.languageSelectionHeader")}</StyledLanguageLabel>

        <StyledLanguageWrapper>
          <Select
            value={currentLanguageObject}
            isSearchable={false}
            onChange={(onChangeValue) => handleLanguageChange(onChangeValue)}
            options={languageOptions}
            styles={{
              singleValue: (baseStyles) => ({
                ...baseStyles,
                textTransform: "capitalize",
              }),
              menu: (baseStyles) => ({
                ...baseStyles,
                textTransform: "capitalize",
              }),
              option: (styles, { isSelected }) => {
                return {
                  ...styles,
                  color: isSelected ? colorTheme.colors.white_always_color : colorTheme.colors.baseText_color,
                };
              },
            }}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                neutral0: colorTheme.colors.baseBox_backgroundColor,
                neutral80: colorTheme.colors.baseText_color,
                primary: colorTheme.colors.baseLink_color,
                primary25: colorTheme.colors.baseButtonAndIcon_backgroundColorHover,
              },
            })}
          />
        </StyledLanguageWrapper>
      </StyledBox>
    </>
  );
};

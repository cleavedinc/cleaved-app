import React, { FunctionComponent } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { ProjectsContextProvider } from "../../contexts";
import { useTranslator } from "../../hooks";

export const AsideLoginPageDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <ProjectsContextProvider>
      <StickUnderHeaderDesktopOnly>
        <AsideHelperInfoHeaderTextImageBox
          helperInfoImageAltText={t("loginPage.loginHelperImageTopAlt")}
          helperInfoImageUrl={"/helper-info/person-using-cleaved-at-desk.svg"}
          helperInfoText={t("loginPage.loginHelperText")}
          helperInfoTextHeader={t("loginPage.loginHelperHeader")}
        />
      </StickUnderHeaderDesktopOnly>
    </ProjectsContextProvider>
  );
};

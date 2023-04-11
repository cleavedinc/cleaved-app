import React, { FunctionComponent, useContext } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { PostsContext, ProjectsContextProvider } from "../../contexts";
import { WidgetProjectListDataWrapper } from "../../data-wrappers";
import { useTranslator } from "../../hooks";

export const AsideHomeDataWrapper: FunctionComponent = () => {
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  return (
    <ProjectsContextProvider>
      <StickUnderHeaderDesktopOnly>
        {/* Something like this is also on the main home page, but only shows for mobile width */}
        {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 50 && (
          <AsideHelperInfoHeaderTextImageBox
            helperInfoImageAltText={t("helperInformationBoxes.collaborativeTimelineAlt")}
            helperInfoImageUrl={"/helper-info/decisions-helper-image.svg"}
            helperInfoText={t("helperInformationBoxes.collaborativeTimelineText")}
            helperInfoTextHeader={t("helperInformationBoxes.collaborativeTimelineHeader")}
          />
        )}

        <WidgetProjectListDataWrapper />
      </StickUnderHeaderDesktopOnly>
    </ProjectsContextProvider>
  );
};

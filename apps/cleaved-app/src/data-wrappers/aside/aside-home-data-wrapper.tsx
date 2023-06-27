import React, { FunctionComponent, useContext } from "react";

import { StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideHelperInfoHeaderTextImageBox } from "../../components";
import { PostsContext } from "../../contexts";
import { WidgetProjectListDataWrapper } from "../../data-wrappers";
import { useTranslator } from "../../hooks";

import decisionsHelperImage from "../../media/helper-info/decisions-helper-image.svg";

export const AsideHomeDataWrapper: FunctionComponent = () => {
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  return (
    <StickUnderHeaderDesktopOnly>
      {/* Something like this is also on the main home page, but only shows for mobile width */}
      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 50 && (
        <AsideHelperInfoHeaderTextImageBox
          helperInfoImageAltText={t("helperInformationBoxes.collaborativeTimelineAlt")}
          helperInfoImageUrl={decisionsHelperImage}
          helperInfoText={t("helperInformationBoxes.collaborativeTimelineText")}
          helperInfoTextHeader={t("helperInformationBoxes.collaborativeTimelineHeader")}
        />
      )}

      <WidgetProjectListDataWrapper />
    </StickUnderHeaderDesktopOnly>
  );
};

import React, { FunctionComponent, useContext } from "react";

import { PostsContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, PostProjectList } from "../../components";
import { useTranslator } from "../../hooks";

export const HomeDataWrapper: FunctionComponent = () => {
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  return (
    <>
      <PostProjectList />

      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 0 && (
        <HelperInfoHeaderTextImageRightBox
          backgroundColor={"transparent"}
          helperInfoImageAltText={t("helperInformationBoxes.homePageEmptyStateAlt")}
          helperInfoImageUrl={"/helper-info/project-whiteboard-two-people.svg"}
          helperInfoText={t("helperInformationBoxes.homePageEmptyStateText")}
          helperInfoTextHeader={t("helperInformationBoxes.homePageEmptyStateHeader")}
          width={"150px"}
        />
      )}
    </>
  );
};

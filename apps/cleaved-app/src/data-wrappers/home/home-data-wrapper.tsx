import React, { FunctionComponent, useContext } from "react";

import { BoxNoPadding } from "@cleaved/ui";

import { PostsContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, PostProjectList } from "../../components";
import { useTranslator } from "../../hooks";

import projectWhiteboardTwoPeople from "../../media/helper-info/project-whiteboard-two-people.svg";

export const HomeDataWrapper: FunctionComponent = () => {
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  return (
    <>
      <PostProjectList />

      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length === 0 && (
        <BoxNoPadding>
          <HelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("helperInformationBoxes.homePageEmptyStateAlt")}
            helperInfoImageUrl={projectWhiteboardTwoPeople}
            helperInfoText={t("helperInformationBoxes.homePageEmptyStateText")}
            helperInfoTextHeader={t("helperInformationBoxes.homePageEmptyStateHeader")}
            width={"150px"}
          />
        </BoxNoPadding>
      )}
    </>
  );
};

import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { BoxHelperInfo, BoxNoPadding, COLORS, FONT_WEIGHTS, mediaQueries, SectionHeader, SPACING } from "@cleaved/ui";

import { PostsContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, PostProjectList } from "../../components";
import { useTranslator } from "../../hooks";

const StyledHelperInfoBoxWrapper = styled(BoxHelperInfo)`
  align-items: center;
  background-color: ${COLORS.TAN_300};
  display: flex;

  ${mediaQueries.SM} {
    display: none;
  }
`;

const StyledHelperInfoImageRight = styled.img`
  object-fit: cover;
  height: 100%;
  margin-left: auto;
  width: 120px;
`;

const StyledHelperInfoText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledHelperInfoTextHeader = styled(SectionHeader)`
  font-weight: ${FONT_WEIGHTS.MEDIUM_LIGHT};
`;

const StyledHelperInfoTextWrapper = styled.div``;

export const HomeDataWrapper: FunctionComponent = () => {
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  const helperInfoImageRight = t("helperInformationBoxes.collaborativeTimelineAlt")
    ? t("helperInformationBoxes.collaborativeTimelineAlt")
    : "";

  return (
    <>
      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 50 && (
        <StyledHelperInfoBoxWrapper>
          <StyledHelperInfoTextWrapper>
            <StyledHelperInfoTextHeader>
              {t("helperInformationBoxes.collaborativeTimelineHeader")}
            </StyledHelperInfoTextHeader>
            <StyledHelperInfoText>{t("helperInformationBoxes.collaborativeTimelineText")}</StyledHelperInfoText>
          </StyledHelperInfoTextWrapper>

          <StyledHelperInfoImageRight alt={helperInfoImageRight} src={"/helper-info/decisions-helper-image.svg"} />
        </StyledHelperInfoBoxWrapper>
      )}

      <PostProjectList />

      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 0 && (
        <BoxNoPadding>
          <HelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("helperInformationBoxes.homePageEmptyStateAlt")}
            helperInfoImageUrl={"/helper-info/project-whiteboard-two-people.svg"}
            helperInfoText={t("helperInformationBoxes.homePageEmptyStateText")}
            helperInfoTextHeader={t("helperInformationBoxes.homePageEmptyStateHeader")}
            width={"150px"}
          />
        </BoxNoPadding>
      )}
    </>
  );
};

import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import { BoxHelperInfo, BoxNoPadding, FONT_WEIGHTS, mediaQueries, SectionHeader, SPACING } from "@cleaved/ui";

import { authTokenContext, PostsContext } from "../../contexts";
import { HelperInfoHeaderTextImageRightBox, PostProjectList } from "../../components";
import { useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

const StyledHelperInfoBoxWrapper = styled(BoxHelperInfo)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.helperInfoBoxWrapper_backgroundColor};
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
  const { preferredOrgId } = useContext(authTokenContext);
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { t } = useTranslator();

  const helperInfoImageRight = t("helperInformationBoxes.collaborativeTimelineAlt")
    ? t("helperInformationBoxes.collaborativeTimelineAlt")
    : "";

  if (preferredOrgId) {
    // if no preferredOrgId, send to onboarding screen
    navigate(routeConstantsCleavedApp.professionalOnboarding.route);
  }

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

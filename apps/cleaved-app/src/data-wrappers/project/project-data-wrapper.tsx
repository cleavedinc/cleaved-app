import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { Box, ButtonPrimary, ButtonSecondary, Modal, SPACING } from "@cleaved/ui";

import {
  HelperInfoHeaderTextImageRightBox,
  PostProjectList,
  ProjectPostButtonAvatar,
  StyledPostFormButton,
  StyledPostFormButtonText,
} from "../../components";
import { PostsContext } from "../../contexts";
import { ProjectPostForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useFindMyAccount, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import arrowPointingUpTowardRight from "../../media/helper-info/arrow-pointing-up-toward-right.svg";

const StyledActionWrapper = styled.div`
  display: flex;
  padding: ${SPACING.XXLARGE} 0 0;
`;

const StyledActionText = styled.div``;

const StyledButtonPrimary = styled(ButtonPrimary)`
  display: flex;
  margin-left: auto;
`;

const StyledProjectPostBox = styled(Box)`
  display: flex;
`;

export const ProjectDataWrapper: FunctionComponent = () => {
  const { projectPostFormIsDirty, projectPostFormImageUploadIsDirty } = useContext(PostsContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const accountQuery = useFindMyAccount();
  const [isContentFeedFormModalOpen, setIsContentFeedFormModalOpen] = useState(false);
  const [isConfirmDiscardChangesModalOpen, setIsConfirmDiscardChangesModalOpen] = useState(false);
  const [closeRequested, setCloseRequested] = useState(false);

  const { t } = useTranslator();

  const handleCloseBothModals = () => {
    setIsContentFeedFormModalOpen(false);
    setIsConfirmDiscardChangesModalOpen(false);
  };

  useEffect(() => {
    if (closeRequested) {
      if (projectPostFormIsDirty || projectPostFormImageUploadIsDirty) {
        setIsConfirmDiscardChangesModalOpen(true);
      }

      if (!projectPostFormIsDirty && !projectPostFormImageUploadIsDirty) {
        setIsContentFeedFormModalOpen(false);
      }

      setCloseRequested(false);
    }
  }, [projectPostFormIsDirty, projectPostFormImageUploadIsDirty, closeRequested]);

  const areYouSureDiscardPostModalTitle = t("post.areYouSureDiscardPostModalTitle")
    ? t("post.areYouSureDiscardPostModalTitle")
    : undefined;
  const postAProjectUpdate = t("post.createProjectPost") ? t("post.createProjectPost") : undefined;

  return (
    <>
      {hasPermission && (
        <StyledProjectPostBox>
          <ProjectPostButtonAvatar account={accountQuery.data?.findMyAccount} />

          <StyledPostFormButton onClick={() => setIsContentFeedFormModalOpen(true)} type="button">
            <StyledPostFormButtonText>
              {t("post.createProjectPostWithName", { name: accountQuery.data?.findMyAccount.firstName })}
            </StyledPostFormButtonText>
          </StyledPostFormButton>
          <Modal
            open={isContentFeedFormModalOpen}
            onCloseRequested={() => {
              setCloseRequested(true);
            }}
            title={`${postAProjectUpdate}`}
          >
            <ProjectPostForm
              closeForm={() => {
                setCloseRequested(true);
              }}
            />
          </Modal>
          <Modal
            open={isConfirmDiscardChangesModalOpen}
            onCloseRequested={() => setIsConfirmDiscardChangesModalOpen(false)}
            title={`${areYouSureDiscardPostModalTitle}`}
          >
            <StyledActionText>{t("post.areYouSureDiscardPostModalText")}</StyledActionText>

            <StyledActionWrapper>
              <ButtonSecondary type="button" onClick={() => handleCloseBothModals()}>
                {t("post.areYouSureDiscardPostButtonText")}
              </ButtonSecondary>

              <StyledButtonPrimary type="button" onClick={() => setIsConfirmDiscardChangesModalOpen(false)}>
                {t("post.areYouSureKeepPostButtonText")}
              </StyledButtonPrimary>
            </StyledActionWrapper>
          </Modal>
        </StyledProjectPostBox>
      )}

      <PostProjectList />

      {!postProjectSeekDataLoading && postProjectSeekData && postProjectSeekData.length <= 0 && (
        <>
          <HelperInfoHeaderTextImageRightBox
            backgroundColor={"transparent"}
            helperInfoImageAltText={t("helperInformationBoxes.projectListEmptyStateAlt")}
            helperInfoImageUrl={arrowPointingUpTowardRight}
            helperInfoText={t("helperInformationBoxes.projectListEmptyStateText")}
            helperInfoTextHeader={t("helperInformationBoxes.projectListEmptyStateHeader")}
            width={"150px"}
          />
        </>
      )}
    </>
  );
};

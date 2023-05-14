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
import { AccountContext, PostsContext } from "../../contexts";
import { ProjectPostForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

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
  const { projectPostFormIsDirty } = useContext(PostsContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { accountData } = useContext(AccountContext);
  const [isContentFeedFormModalOpen, setIsContentFeedFormModalOpen] = useState(false);
  const [isConfirmDiscardChangesModalOpen, setIsConfirmDiscardChangesModalOpen] = useState(false);

  const { t } = useTranslator();

  const handleCloseBothModals = () => {
    setIsContentFeedFormModalOpen(false);
    setIsConfirmDiscardChangesModalOpen(false);
  };

  // fix this. A rerender seems to be happening when you have a dirty form, then trigger the function below.
  const handleCheckAndCloseProjectPostForm = () => {
    console.log("ProjectDataWrapper projectPostFormIsDirty", projectPostFormIsDirty);

    if (projectPostFormIsDirty) {
      console.log("111111");
      setIsConfirmDiscardChangesModalOpen(true);
    }

    if (!projectPostFormIsDirty) {
      console.log("22222");
      setIsContentFeedFormModalOpen(false);
    }
  };

  useEffect(() => {
    console.log("USEEFFECT projectPostFormIsDirty", projectPostFormIsDirty);
  }, [projectPostFormIsDirty]);

  const areYouSureDiscardPostModalTitle = t("post.areYouSureDiscardPostModalTitle")
    ? t("post.areYouSureDiscardPostModalTitle")
    : undefined;
  const postAProjectUpdate = t("post.createProjectPost") ? t("post.createProjectPost") : undefined;

  return (
    <>
      {hasPermission && (
        <StyledProjectPostBox>
          <ProjectPostButtonAvatar account={accountData} />

          <StyledPostFormButton onClick={() => setIsContentFeedFormModalOpen(true)} type="button">
            <StyledPostFormButtonText>
              {t("post.createProjectPostWithName", { name: accountData?.firstName })}
            </StyledPostFormButtonText>
          </StyledPostFormButton>

          <Modal
            open={isContentFeedFormModalOpen}
            onCloseRequested={() => handleCheckAndCloseProjectPostForm()}
            title={postAProjectUpdate}
          >
            <ProjectPostForm closeForm={() => handleCheckAndCloseProjectPostForm()} />
          </Modal>

          <Modal
            open={isConfirmDiscardChangesModalOpen}
            onCloseRequested={() => setIsConfirmDiscardChangesModalOpen(false)}
            title={areYouSureDiscardPostModalTitle}
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
            helperInfoImageUrl={"/helper-info/arrow-pointing-up-toward-right.svg"}
            helperInfoText={t("helperInformationBoxes.projectListEmptyStateText")}
            helperInfoTextHeader={t("helperInformationBoxes.projectListEmptyStateHeader")}
            width={"150px"}
          />
        </>
      )}
    </>
  );
};

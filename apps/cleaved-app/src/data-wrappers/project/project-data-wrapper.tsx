import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { Box, Modal } from "@cleaved/ui";

import {
  AreYouSureModal,
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

const StyledProjectPostBox = styled(Box)`
  display: flex;
`;

export const ProjectDataWrapper: FunctionComponent = () => {
  const { projectPostFormIsDirty, projectPostFormImageUploadIsDirty } = useContext(PostsContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const accountQuery = useFindMyAccount();
  const [isContentFeedFormModalOpen, setIsContentFeedFormModalOpen] = useState(false);
  const [isAreYouSureModalOpen, setIsAreYouSureModalOpen] = useState(false);
  const [closeRequested, setCloseRequested] = useState(false);

  const { t } = useTranslator();

  const handleConfirmAction = () => {
    setIsContentFeedFormModalOpen(false);
    setIsAreYouSureModalOpen(false);
  };

  useEffect(() => {
    if (closeRequested) {
      if (projectPostFormIsDirty || projectPostFormImageUploadIsDirty) {
        setIsAreYouSureModalOpen(true);
      }

      if (!projectPostFormIsDirty && !projectPostFormImageUploadIsDirty) {
        setIsContentFeedFormModalOpen(false);
      }

      setCloseRequested(false);
    }
  }, [projectPostFormIsDirty, projectPostFormImageUploadIsDirty, closeRequested]);

  const areYouSureConfirmButtonText = t("post.areYouSureDiscardPostButtonText")
    ? t("post.areYouSureDiscardPostButtonText")
    : undefined;

  const areYouSureRejectButtonText = t("post.areYouSureKeepPostButtonText")
    ? t("post.areYouSureKeepPostButtonText")
    : undefined;

  const areYouSureDiscardPostModalText = t("post.areYouSureDiscardPostModalText")
    ? t("post.areYouSureDiscardPostModalText")
    : undefined;

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

          <AreYouSureModal
            areYouSureConfirmButtonText={areYouSureConfirmButtonText}
            areYouSureRejectButtonText={areYouSureRejectButtonText}
            areYouSureDescription={areYouSureDiscardPostModalText}
            areYouSureTitle={areYouSureDiscardPostModalTitle}
            handleConfirmAction={handleConfirmAction}
            isAreYouSureModalOpen={isAreYouSureModalOpen}
            setIsAreYouSureModalOpen={setIsAreYouSureModalOpen}
          />
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

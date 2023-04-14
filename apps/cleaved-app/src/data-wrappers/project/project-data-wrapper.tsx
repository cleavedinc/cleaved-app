import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";

import { Box, Modal } from "@cleaved/ui";

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

const StyledProjectPostBox = styled(Box)`
  display: flex;
`;

export const ProjectDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { postProjectSeekData, postProjectSeekDataLoading } = useContext(PostsContext);
  const { accountData } = useContext(AccountContext);
  const [isContentFeedFormModalOpen, setIsContentFeedFormModalOpen] = useState(false);
  const { t } = useTranslator();

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
            onCloseRequested={() => setIsContentFeedFormModalOpen(false)}
            title={postAProjectUpdate}
          >
            <ProjectPostForm closeForm={() => setIsContentFeedFormModalOpen(false)} />
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

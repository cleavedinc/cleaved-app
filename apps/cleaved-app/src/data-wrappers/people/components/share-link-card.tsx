import React, { FunctionComponent } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled, { useTheme } from "styled-components";

import { BORDERS, Box, ButtonPrimary, CopyIcon, FONT_SIZES, Paragraph, RADIUS, SPACING } from "@cleaved/ui";

import { ShareLinkEditMenu } from "../../../components";
import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../../generated-types/graphql";
import { routeConstantsCleavedApp } from "../../../router";

type SharelinkCardProps = {
  copyToClipboardOnCopy: () => void;
  createShareLinkButtonText: any;
  createShareLink: () => void;
  hasPermission: boolean;
  isPermissionCreated: any;
  loading: boolean;
  refetch: any;
  shareLink: any;
  shareLinkDescription: string;
  shareLinkTitle: string;
};

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin-right: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.SMALL};
`;

const StyledShareLinkDescription = styled(Paragraph)``;

const StyledShareLinkHeader = styled.div`
  font-size: ${FONT_SIZES.LARGE};
  margin-bottom: ${SPACING.SMALL};
`;

const StyledShareLinkWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledShareLinkIcon = styled(CopyIcon)`
  cursor: pointer;
  margin-right: ${SPACING.SMALL};
`;

const StyledShareLinkCopyToClipboardWrapper = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
`;

const StyledShareLinkInputReadOnly = styled.input`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  margin-right: ${SPACING.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

export const SharelinkCard: FunctionComponent<SharelinkCardProps> = (props) => {
  const {
    copyToClipboardOnCopy,
    createShareLinkButtonText,
    createShareLink,
    hasPermission,
    isPermissionCreated,
    loading,
    refetch,
    shareLinkDescription,
    shareLink,
    shareLinkTitle,
  } = props;
  const theme = useTheme();

  return (
    <Box>
      <StyledShareLinkHeader>{shareLinkTitle}</StyledShareLinkHeader>

      <StyledShareLinkDescription>{shareLinkDescription}</StyledShareLinkDescription>

      {hasPermission && !loading && !isPermissionCreated && (
        <StyledButtonPrimary onClick={createShareLink} type="button">
          {createShareLinkButtonText}
        </StyledButtonPrimary>
      )}

      {hasPermission && !loading && isPermissionCreated && (
        <StyledShareLinkWrapper>
          <CopyToClipboard text={shareLink} onCopy={copyToClipboardOnCopy}>
            <StyledShareLinkCopyToClipboardWrapper>
              <StyledShareLinkIcon color={theme.colors.baseLink_color} />
              <StyledShareLinkInputReadOnly value={shareLink} readOnly />
            </StyledShareLinkCopyToClipboardWrapper>
          </CopyToClipboard>

          <ShareLinkEditMenu refetchSharelinkData={refetch} shareLinkPermission={isPermissionCreated.permission} />
        </StyledShareLinkWrapper>
      )}
    </Box>
  );
};

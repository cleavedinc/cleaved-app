import React, { FunctionComponent } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "ts-debounce";
import styled from "styled-components";

import { alertCopied, logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonDanger,
  ButtonPrimary,
  CopyIcon,
  mediaQueries,
  RADIUS,
  SPACING,
  StyledTable,
  StyledTBody,
  StyledTd,
  StyledTh,
  StyledTHeadTr,
  StyledTHead,
  StyledTr,
} from "@cleaved/ui";

import { HelperInfoHeaderTextImageRightBox, ShareLinkEditMenu } from "../../components";
import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../generated-types/graphql";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { ORGANIZATION_SHARE_LINKS_QUERY } from "../../gql-queries";
import { useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import peopleHelperImage from "../../media/helper-info/people-helper-image.svg";

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin-right: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.SMALL};
`;

const StyledButtonDanger = styled(ButtonDanger)`
  margin-right: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.SMALL};
`;

const StyledCreateShareLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${SPACING.XLARGE} ${SPACING.MEDIUM};
  text-align: center;

  ${mediaQueries.SM_MD} {
    margin: ${SPACING.XXXLARGE} ${SPACING.MEDIUM};
  }
`;

const StyledCreateShareLinkText = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledPermissionLevel = styled.div`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledPermissionLevelTh = styled(StyledTh)`
  width: 150px;
`;

const StyledProfessionalInviteListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${SPACING.MEDIUM};

  ${mediaQueries.RESPONSIVE_TABLE} {
    flex-direction: column;
    margin-top: ${SPACING.SMALL};
  }
`;

const StyledShareLinkIcon = styled(CopyIcon)`
  cursor: pointer;
  margin-right: ${SPACING.SMALL};
`;

const StyledShareLinkWrapper = styled.div`
  align-items: center;
  display: flex;
`;

const StyledShareLinkInputReadOnly = styled.input`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  display: flex;
  margin-right: ${SPACING.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

const StyledTdWithMenuContent = styled(StyledTd)`
  vertical-align: middle; /* Fixes a double bottom border in safari */

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(1):before {
      content: "Permission level";
    }

    &:nth-of-type(2):before {
      content: "Share link";
    }
  }
`;

const StyledTdWithMenuContentEdit = styled(StyledTd)`
  width: 100px;

  ${mediaQueries.RESPONSIVE_TABLE} {
    &:nth-of-type(4):before {
      content: "Manage";
    }
  }
`;

export const PeopleListProfessionalInviteDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const { t } = useTranslator();

  const {
    data: organizationShareLinksArray,
    loading,
    refetch,
  } = useQuery<OrganizationShareLinksQuery>(ORGANIZATION_SHARE_LINKS_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !organizationId,
    variables: { organizationId },
  });

  const [generateOrganizationShareLink] = useMutation(GENERATE_ORGANIZATION_SHARE_LINK_MUTATION, {
    onCompleted: () => {
      if (refetch) {
        refetch();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const shareLinkArray = organizationShareLinksArray?.organizationShareLinks;
  const isPermissionReadCreated = shareLinkArray?.find((x) => x.permission === OrgPermissionLevel.Viewer);
  const isPermissionWriteCreated = shareLinkArray?.find((x) => x.permission === OrgPermissionLevel.Updater);
  const isPermissionAdminCreated = shareLinkArray?.find((x) => x.permission === OrgPermissionLevel.Admin);

  const handleAlertCopied = debounce(
    (message: string) => {
      alertCopied(message);
    },
    1000,
    { isImmediate: true }
  );

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.inviteProfessionalToOrganizationAlt")}
        helperInfoImageUrl={peopleHelperImage}
        helperInfoText={t("helperInformationBoxes.peopleText")}
        helperInfoTextHeader={t("helperInformationBoxes.peopleHeader")}
        width={"250px"}
      />

      <StyledProfessionalInviteListHeader>
        {hasPermission && !loading && !isPermissionReadCreated && (
          <StyledButtonPrimary
            onClick={() =>
              generateOrganizationShareLink({
                variables: {
                  organizationId,
                  permission: OrgPermissionLevel.Viewer,
                },
              })
            }
            type="button"
          >
            {t("shareLinks.createReadShareLink")}
          </StyledButtonPrimary>
        )}

        {hasPermission && !loading && !isPermissionWriteCreated && (
          <StyledButtonPrimary
            onClick={() =>
              generateOrganizationShareLink({
                variables: {
                  organizationId,
                  permission: OrgPermissionLevel.Updater,
                },
              })
            }
            type="button"
          >
            {t("shareLinks.createWriteShareLink")}
          </StyledButtonPrimary>
        )}

        {hasPermission && !loading && !isPermissionAdminCreated && (
          <StyledButtonDanger
            onClick={() =>
              generateOrganizationShareLink({
                variables: {
                  organizationId,
                  permission: OrgPermissionLevel.Admin,
                },
              })
            }
          >
            {t("shareLinks.createAdminShareLink")}
          </StyledButtonDanger>
        )}
      </StyledProfessionalInviteListHeader>

      {hasPermission && !loading && shareLinkArray && shareLinkArray.length > 0 && (
        <>
          <StyledTable role="table">
            <StyledTHead role="rowgroup">
              <StyledTHeadTr role="row">
                <StyledPermissionLevelTh role="columnheader">{t("shareLinks.permissionLevel")}</StyledPermissionLevelTh>
                <StyledTh role="columnheader">{t("shareLinks.shareLink")}</StyledTh>
                <StyledTh role="columnheader">{t("shareLinks.manage")}</StyledTh>
              </StyledTHeadTr>
            </StyledTHead>
            <StyledTBody role="rowgroup">
              {shareLinkArray.map((shareLink) => {
                return (
                  <StyledTr key={shareLink.id} role="row">
                    <StyledTdWithMenuContent role="cell">
                      <StyledPermissionLevel>{shareLink.permission}</StyledPermissionLevel>
                    </StyledTdWithMenuContent>
                    <StyledTdWithMenuContent role="cell">
                      <CopyToClipboard
                        text={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${shareLink.shareLink}`}
                        onCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
                      >
                        <StyledShareLinkWrapper>
                          <StyledShareLinkIcon />
                          <StyledShareLinkInputReadOnly
                            value={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${shareLink.shareLink}`}
                            readOnly
                          />
                        </StyledShareLinkWrapper>
                      </CopyToClipboard>
                    </StyledTdWithMenuContent>
                    <StyledTdWithMenuContentEdit role="cell">
                      <ShareLinkEditMenu refetchSharelinkData={refetch} shareLinkPermission={shareLink.permission} />
                    </StyledTdWithMenuContentEdit>
                  </StyledTr>
                );
              })}
            </StyledTBody>
          </StyledTable>
        </>
      )}

      {hasPermission && !loading && shareLinkArray && shareLinkArray.length <= 0 && (
        <StyledCreateShareLinkWrapper>
          <StyledCreateShareLinkText>{t("shareLinks.professionalInviteEmptyState")}</StyledCreateShareLinkText>
        </StyledCreateShareLinkWrapper>
      )}
    </>
  );
};

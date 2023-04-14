import React, { FunctionComponent, useContext, useEffect } from "react";
import { navigate } from "@reach/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "ts-debounce";
import styled from "styled-components";

import { alertCopied, logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonPrimary,
  ButtonSecondary,
  COLORS,
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
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../generated-types/graphql";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { ORGANIZATION_SHARE_LINKS_QUERY } from "../../gql-queries";
import { useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledButtonPrimary = styled(ButtonPrimary)`
  margin-right: ${SPACING.MEDIUM};
  margin-bottom: ${SPACING.SMALL};
`;

const StyledButtonSecondary = styled(ButtonSecondary)`
  margin-right: ${SPACING.MEDIUM};
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
  background-color: ${COLORS.WHITE};
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.MEDIUM};
  cursor: pointer;
  display: flex;
  margin-right: ${SPACING.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;

  :hover {
    background-color: ${COLORS.BLUE_50};
  }
`;

const StyledTdWithMenuContent = styled(StyledTd)`
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

export const TeamslistProfessionalInviteDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const { t } = useTranslator();

  const {
    data: organizationShareLinksArray,
    loading,
    refetch,
  } = useQuery<OrganizationShareLinksQuery>(ORGANIZATION_SHARE_LINKS_QUERY, {
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

  // route to the home page if the user makes it to this page somehow
  useEffect(() => {
    if (!hasPermission) {
      navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    }
  }, []); // eslint-disable-line

  return (
    <>
      <HelperInfoHeaderTextImageRightBox
        helperInfoImageAltText={t("helperInformationBoxes.inviteProfessionalToOrganizationAlt")}
        helperInfoImageUrl={"/helper-info/people-helper-image.svg"}
        helperInfoText={t("helperInformationBoxes.inviteProfessionalToOrganizationText")}
        helperInfoTextHeader={t("helperInformationBoxes.inviteProfessionalToOrganizationHeader")}
        width={"400px"}
      />

      <StyledProfessionalInviteListHeader>
        {!loading && !isPermissionReadCreated && (
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

        {!loading && !isPermissionWriteCreated && (
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

        {!loading && !isPermissionAdminCreated && (
          <StyledButtonSecondary
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
          </StyledButtonSecondary>
        )}
      </StyledProfessionalInviteListHeader>

      {!loading && shareLinkArray && shareLinkArray.length > 0 && (
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
    </>
  );
};

import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { debounce } from "ts-debounce";
import styled from "styled-components";

import { alertCopied, logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonSecondary, CopyIcon, LinkButtonPrimary, Paragraph, RADIUS, SPACING } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../generated-types/graphql";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { useLoginGuard, useProjectsInOrganizationSeek, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";
import { ORGANIZATION_SHARE_LINKS_QUERY } from "../../gql-queries";

import { StyledBox, StyledButtonPrimaryWrapper, StyledH1, StyledNextStepButton } from "./components";

const StyledButtonPrimary = styled(ButtonSecondary)`
  background-color: ${({ theme }) => theme.colors.baseButtonSecondaryLink_color};
  color: ${({ theme }) => theme.colors.baseText_color};
`;

const StyledLinkButtonPrimary = styled(LinkButtonPrimary)`
  background-color: ${({ theme }) => theme.colors.baseButtonSecondaryLink_color};
  color: ${({ theme }) => theme.colors.baseText_color};
`;

const StyledShareLinkIcon = styled(CopyIcon)`
  cursor: pointer;
  margin-right: ${SPACING.SMALL};
`;

const StyledShareLinkInputReadOnly = styled.input`
  background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;
  display: flex;
  margin-right: ${SPACING.SMALL};
  padding: ${SPACING.SMALL} ${SPACING.MEDIUM};
  width: 100%;
`;

const StyledShareLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.MEDIUM};
`;

export const InviteUsers: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();
  const { projectsInOrganizationSeekDataLoading, projectsInOrganizationSeekData } = useProjectsInOrganizationSeek();
  const { preferredOrgId } = useContext(authTokenContext);
  const [shareLinkArray, setShareLinkArray] = useState<OrganizationShareLinksQuery["organizationShareLinks"]>([]);
  const { t } = useTranslator();

  const { data, loading, refetch, error } = useQuery<OrganizationShareLinksQuery>(ORGANIZATION_SHARE_LINKS_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    skip: !isLoggedIn || !preferredOrgId,
    variables: { organizationId: preferredOrgId },
  });

  useEffect(() => {
    if (loading) {
      return;
    }

    if (error) {
      logQueryError(error);
      return;
    }

    if (data && data?.organizationShareLinks) {
      setShareLinkArray(data?.organizationShareLinks);
    }
  }, [data, error, loading, shareLinkArray]);

  const [
    generateOrganizationShareLink,
    { loading: generateOrganizationShareLinkLoading, error: generateOrganizationShareLinkError },
  ] = useMutation(GENERATE_ORGANIZATION_SHARE_LINK_MUTATION);

  useEffect(() => {
    if (generateOrganizationShareLinkLoading) {
      return;
    }

    if (generateOrganizationShareLinkError) {
      logQueryError(generateOrganizationShareLinkError);
      return;
    }

    if (refetch) {
      refetch();
    }
  }, [generateOrganizationShareLinkLoading, generateOrganizationShareLinkError, refetch]);

  const shareLinkObject = shareLinkArray?.find((x) => x.permission === OrgPermissionLevel.Updater);
  const shareLinkUrl = `${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${shareLinkObject?.shareLink}`;

  const handleCompleteonboardingFlow = () => {
    if (projectsInOrganizationSeekData && projectsInOrganizationSeekData?.[0]) {
      navigate(
        `/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${projectsInOrganizationSeekData?.[0].id}${routeConstantsCleavedApp.projectBoard.route}`
      );
    } else {
      navigate(`/${preferredOrgId}${routeConstantsCleavedApp.home.route}`);
    }
  };

  const handleAlertCopied = debounce(
    (message: string) => {
      alertCopied(message);
    },
    1000,
    { isImmediate: true }
  );

  return (
    <>
      <StyledBox>
        <StyledH1>{t("professionalOnboarding.invitePeopleFormHeader")}</StyledH1>
        <Paragraph>{t("shareLinks.createWriteShareLinkText")}</Paragraph>

        {!loading && shareLinkArray && shareLinkArray?.length === 0 && (
          <StyledButtonPrimary
            onClick={() =>
              generateOrganizationShareLink({
                variables: {
                  organizationId: preferredOrgId,
                  permission: OrgPermissionLevel.Updater,
                },
              })
            }
            type="button"
          >
            {t("shareLinks.createWriteShareLink")}
          </StyledButtonPrimary>
        )}

        {!loading &&
          shareLinkArray &&
          shareLinkArray?.length > 0 &&
          shareLinkArray.map((shareLink) => {
            return (
              <span key={shareLink.id}>
                <CopyToClipboard
                  text={shareLinkUrl}
                  onCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
                >
                  <StyledShareLinkWrapper>
                    <StyledShareLinkIcon />
                    <StyledShareLinkInputReadOnly value={shareLinkUrl} readOnly />
                  </StyledShareLinkWrapper>
                </CopyToClipboard>
              </span>
            );
          })}

        {!loading && shareLinkArray && shareLinkArray?.length > 0 && (
          <StyledLinkButtonPrimary
            href={`mailto:?subject=${t("professionalOnboarding.mailtoLinkEmailSubjectText")}&body=${t(
              "professionalOnboarding.mailtoLinkEmailBodyText"
            )} ${shareLinkUrl}`}
          >
            {t("professionalOnboarding.mailtoLink")}
          </StyledLinkButtonPrimary>
        )}
      </StyledBox>

      {!projectsInOrganizationSeekDataLoading && (
        <StyledButtonPrimaryWrapper>
          <StyledNextStepButton onClick={() => handleCompleteonboardingFlow()} type="button">
            {t("professionalOnboarding.finishOnboarding")}
          </StyledNextStepButton>
        </StyledButtonPrimaryWrapper>
      )}
    </>
  );
};

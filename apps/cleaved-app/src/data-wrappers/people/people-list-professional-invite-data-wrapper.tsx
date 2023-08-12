import React, { FunctionComponent } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { debounce } from "ts-debounce";

import { alertCopied, logQueryError } from "@cleaved/helpers";

import { OrgPermissionLevel, OrganizationShareLinksQuery } from "../../generated-types/graphql";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { ORGANIZATION_SHARE_LINKS_QUERY } from "../../gql-queries";
import { useRouteParams, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import { SharelinkCard } from "./components";

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
      {/* VIEWER Share Link */}
      {hasPermission && !loading && (
        <SharelinkCard
          copyToClipboardOnCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
          createShareLinkButtonText={t("shareLinks.createReadShareLink")}
          createShareLink={() =>
            generateOrganizationShareLink({
              variables: {
                organizationId,
                permission: OrgPermissionLevel.Viewer,
              },
            })
          }
          hasPermission={hasPermission}
          isPermissionCreated={isPermissionReadCreated}
          loading={loading}
          refetch={refetch}
          shareLink={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${
            isPermissionReadCreated && isPermissionReadCreated.shareLink
          }`}
          shareLinkDescription={t("shareLinks.readOnlyDescription")}
          shareLinkTitle={t("shareLinks.readOnly")}
        />
      )}
      {/* VIEWER Share Link */}

      {/* UPDATER Share Link */}
      {hasPermission && !loading && (
        <SharelinkCard
          copyToClipboardOnCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
          createShareLinkButtonText={t("shareLinks.createWriteShareLink")}
          createShareLink={() =>
            generateOrganizationShareLink({
              variables: {
                organizationId,
                permission: OrgPermissionLevel.Updater,
              },
            })
          }
          hasPermission={hasPermission}
          isPermissionCreated={isPermissionWriteCreated}
          loading={loading}
          refetch={refetch}
          shareLink={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${
            isPermissionWriteCreated && isPermissionWriteCreated.shareLink
          }`}
          shareLinkDescription={t("shareLinks.readWriteOnlyDescription")}
          shareLinkTitle={t("shareLinks.readWriteOnly")}
        />
      )}
      {/* UPDATER Share Link  */}

      {/* ADMIN Share Link */}
      {hasPermission && !loading && (
        <SharelinkCard
          copyToClipboardOnCopy={() => handleAlertCopied(t("alerts.copiedTextToClipboard"))}
          createShareLinkButtonText={t("shareLinks.createAdminShareLink")}
          createShareLink={() =>
            generateOrganizationShareLink({
              variables: {
                organizationId,
                permission: OrgPermissionLevel.Admin,
              },
            })
          }
          hasPermission={hasPermission}
          isPermissionCreated={isPermissionAdminCreated}
          loading={loading}
          refetch={refetch}
          shareLink={`${process.env.DOMAIN}${routeConstantsCleavedApp.professionalShareLinkRegistration.route}/${
            isPermissionAdminCreated && isPermissionAdminCreated.shareLink
          }`}
          shareLinkDescription={t("shareLinks.adminDescription")}
          shareLinkTitle={t("shareLinks.admin")}
        />
      )}
      {/* ADMIN Share Link  */}
    </>
  );
};

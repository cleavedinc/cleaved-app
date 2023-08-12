import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { ORGANIZATION_REMOVE_ME_MUTATION, SET_PREFERRED_ORGANIZATION_MUTATION } from "../../gql-mutations";

import { StyledBasicItem, StyledBasicItemRed, StyledBasicMenu } from "./components";

import "@szhsin/react-menu/dist/index.css";

type OrganizationEditMenuProps = {
  orgId: string;
};

export const OrganizationEditMenu: FunctionComponent<OrganizationEditMenuProps> = (props) => {
  const { orgId } = props;
  const { logOut, setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();
  const { t } = useTranslator();

  const [organizationRemoveMe] = useMutation(ORGANIZATION_REMOVE_ME_MUTATION, {
    onCompleted: () => {
      logOut();
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setPreferredOrganization] = useMutation(SET_PREFERRED_ORGANIZATION_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleOrganizationRemoveMe = (orgIdArg: string) => {
    organizationRemoveMe({
      variables: {
        organizationId: orgIdArg,
      },
    });
  };

  const handleSetOrganizationId = (orgIdArg: string) => {
    setPreferredOrganization({
      variables: {
        orgId: orgIdArg,
      },
    });

    setPreferredOrgIdOnContext(orgIdArg);
  };

  const areYouSureKeepButtonText = t("organizations.areYouSureKeepButtonText")
    ? t("organizations.areYouSureKeepButtonText")
    : undefined;

  const areYouSureRemoveButtonText = t("organizations.areYouSureRemoveButtonText")
    ? t("organizations.areYouSureRemoveButtonText")
    : undefined;

  const areYouSureRemoveMeFromOrganization = t("organizations.areYouSureRemoveMeFromOrganizationTitle")
    ? t("organizations.areYouSureRemoveMeFromOrganizationTitle")
    : undefined;

  const areYouSureRemoveMeFromOrganizationDetails = t("organizations.areYouSureRemoveMeFromOrganizationDetails")
    ? t("organizations.areYouSureRemoveMeFromOrganizationDetails")
    : undefined;

  return (
    <>
      <StyledBasicMenu
        arrow={true}
        menuButton={
          <CircleEditButtonSmall type="button">
            <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        <StyledBasicItem onClick={() => handleSetOrganizationId(orgId)}>
          {t("organizations.setDefaultOrganization")}
        </StyledBasicItem>

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("organizations.removeOrganization")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      <AreYouSureModal
        areYouSureConfirmButtonText={areYouSureRemoveButtonText}
        areYouSureRejectButtonText={areYouSureKeepButtonText}
        areYouSureDescription={areYouSureRemoveMeFromOrganizationDetails}
        areYouSureTitle={areYouSureRemoveMeFromOrganization}
        handleConfirmAction={() => handleOrganizationRemoveMe(orgId)}
        isAreYouSureModalOpen={isConfirmRemoveModalOpen}
        setIsAreYouSureModalOpen={setIsConfirmRemoveModalOpen}
      />
    </>
  );
};

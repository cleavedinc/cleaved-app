import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { ORGANIZATION_REMOVE_ME_MUTATION } from "../../gql-mutations";

import { StyledBasicItemRed, StyledBasicMenu, StyledDeleteIcon } from "./components";

import "@szhsin/react-menu/dist/index.css";

type OrganizationEditMenuProps = {
  orgId: string;
};

export const OrganizationEditMenu: FunctionComponent<OrganizationEditMenuProps> = (props) => {
  const { orgId } = props;
  const { logOut } = useContext(authTokenContext);
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

  const handleOrganizationRemoveMe = (orgIdArg: string) => {
    organizationRemoveMe({
      variables: {
        organizationId: orgIdArg,
      },
    });
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

  const editOrganizationMenuButton = t("organizations.organizationMenu")
    ? t("organizations.organizationMenu")
    : undefined;

  return (
    <>
      <StyledBasicMenu
        arrow={true}
        menuButton={
          <CircleEditButtonSmall type="button" aria-label={editOrganizationMenuButton}>
            <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          <StyledDeleteIcon color={theme.colors.always_red_color} iconSize={FONT_SIZES.LARGE} />
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

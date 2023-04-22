import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { alertError, logQueryError, verifyUploadSizeIsOK } from "@cleaved/helpers";
import { COLORS, StyledTooltipDark } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import { SET_ACCOUNT_AVATAR_MUTATION } from "./gql";

type AccountAvatarFormProps = {
  className?: string;
  refetchAccountData: (() => void) | undefined;
};

const StyledFileInputLabel = styled.label`
  color: ${COLORS.BLUE_500};
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${COLORS.BLUE_500_HOVER};
  }

  input[type="file"] {
    display: none;
  }
`;

const StyledEditIconWrapper = styled.div``;

export const AccountAvatarForm: FunctionComponent<AccountAvatarFormProps> = (props) => {
  const { className, refetchAccountData } = props;
  const { t } = useTranslator();

  const [setAccountAvatar] = useMutation(SET_ACCOUNT_AVATAR_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleVerifyUploadSizeIsOK = (fileSize: number) => {
    const verifyImageUpload = verifyUploadSizeIsOK(fileSize);

    if (!verifyImageUpload) {
      alertError(t("files.fileSizeExceeded"));
    }

    return verifyImageUpload;
  };

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.validity.valid) {
      if (e.target.files !== null && handleVerifyUploadSizeIsOK(e?.target?.files[0]?.size)) {
        setAccountAvatar({ variables: { image: e.target.files[0] } });

        if (refetchAccountData) {
          setTimeout(refetchAccountData, 2000);
        }
      }
    }
  }

  return (
    <StyledFileInputLabel className={className}>
      <StyledTooltipDark tooltip={t("files.avatarImageSizeRecommendation")}>
        <StyledEditIconWrapper>{t("files.avatarUploadImage")}</StyledEditIconWrapper>
      </StyledTooltipDark>

      <input type="file" required onChange={onChange} />
    </StyledFileInputLabel>
  );
};

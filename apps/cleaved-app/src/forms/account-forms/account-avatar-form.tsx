import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { alertError, logQueryError, verifyUploadSizeIsOK } from "@cleaved/helpers";
import { StyledTooltipWhite } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import { SET_ACCOUNT_AVATAR_MUTATION } from "./gql";

type AccountAvatarFormProps = {
  className?: string;
  refetchAccountData: (() => void) | undefined;
};

const StyledFileInputLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  display: flex;

  &:hover {
    color: ${({ theme }) => theme.colors.baseLink_colorHover};
  }

  input[type="file"] {
    display: none;
  }
`;

const StyledEditIconWrapper = styled.div``;

export const AccountAvatarForm: FunctionComponent<AccountAvatarFormProps> = (props) => {
  const { className, refetchAccountData } = props;
  const { t } = useTranslator();

  const [setAccountAvatar, { loading }] = useMutation(SET_ACCOUNT_AVATAR_MUTATION, {
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
      <StyledTooltipWhite tooltip={t("files.avatarImageSizeRecommendation")}>
        <StyledEditIconWrapper>{t("files.avatarUploadImage")}</StyledEditIconWrapper>
      </StyledTooltipWhite>

      <input accept="image/jpeg, image/png" type="file" required onChange={onChange} disabled={loading} />
    </StyledFileInputLabel>
  );
};

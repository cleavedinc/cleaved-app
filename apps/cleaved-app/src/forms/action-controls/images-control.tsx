import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

import { FONT_SIZES, ImageIcon, StyledTooltipDark } from "@cleaved/ui";
import { useTranslator } from "../../hooks";

type ImagesControlProps = {
  handleActionButton: () => void;
};

const StyledAdditionalActionsIconButton = styled.button`
  background: none;
  color: inherit;
  display: flex;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const ImagesControl: FunctionComponent<ImagesControlProps> = (props) => {
  const { handleActionButton } = props;
  const { t } = useTranslator();
  const theme = useTheme();

  return (
    <StyledTooltipDark allowHTML tooltip={t("post.imageUploadTooltip")} zIndex={999999}>
      <StyledAdditionalActionsIconButton onClick={() => handleActionButton()} type="button">
        <ImageIcon color={theme.colors.always_green_color} iconSize={FONT_SIZES.XXLARGE} />
      </StyledAdditionalActionsIconButton>
    </StyledTooltipDark>
  );
};

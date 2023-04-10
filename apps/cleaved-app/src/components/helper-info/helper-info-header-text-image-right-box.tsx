import React, { FunctionComponent } from "react";

import { StyledHelperInfoBoxWrapper } from "./styled-helper-info-box-wrapper";
import { StyledHelperInfoImageRight } from "./styled-helper-info-image-right";
import { StyledHelperInfoText } from "./styled-helper-info-text";
import { StyledHelperInfoTextHeader } from "./styled-helper-info-text-header";
import { StyledHelperInfoTextWrapper } from "./styled-helper-info-text-wrapper";

type HelperInfoHeaderTextImageRightBoxProps = {
  backgroundColor?: string;
  className?: string;
  height?: string;
  helperInfoImageAltText?: string | null;
  helperInfoImageUrl?: string;
  helperInfoText?: string | null;
  helperInfoTextHeader?: string | null;
  width?: string;
};

export const HelperInfoHeaderTextImageRightBox: FunctionComponent<HelperInfoHeaderTextImageRightBoxProps> = (props) => {
  const {
    backgroundColor,
    className,
    height,
    helperInfoImageAltText,
    helperInfoImageUrl,
    helperInfoText,
    helperInfoTextHeader,
    width,
  } = props;

  const helperInfoImageAltTextNoNull = helperInfoImageAltText ? helperInfoImageAltText : undefined;

  return (
    <StyledHelperInfoBoxWrapper backgroundColor={backgroundColor} className={className}>
      <StyledHelperInfoTextWrapper>
        <StyledHelperInfoTextHeader>{helperInfoTextHeader}</StyledHelperInfoTextHeader>
        <StyledHelperInfoText>{helperInfoText}</StyledHelperInfoText>
      </StyledHelperInfoTextWrapper>

      {helperInfoImageUrl && (
        <StyledHelperInfoImageRight
          alt={helperInfoImageAltTextNoNull}
          height={height}
          src={helperInfoImageUrl}
          width={width}
        />
      )}
    </StyledHelperInfoBoxWrapper>
  );
};

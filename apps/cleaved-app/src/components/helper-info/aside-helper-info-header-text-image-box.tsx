import React, { FunctionComponent } from "react";

import { StyledAsideHelperInfoBoxWrapper } from "./styled-aside-helper-info-box-wrapper";
import { StyledAsideHelperInfoImage } from "./styled-aside-helper-info-image";
import { StyledHelperInfoText } from "./styled-helper-info-text";
import { StyledHelperInfoTextHeader } from "./styled-helper-info-text-header";
import { StyledHelperInfoTextWrapper } from "./styled-helper-info-text-wrapper";

type AsideHelperInfoHeaderTextImageBoxProps = {
  backgroundColor?: string;
  className?: string;
  height?: string;
  helperInfoImageAltText?: string | null;
  helperInfoImageUrl?: string;
  helperInfoText?: string | null;
  helperInfoTextHeader?: string | null;
  width?: string;
};

export const AsideHelperInfoHeaderTextImageBox: FunctionComponent<AsideHelperInfoHeaderTextImageBoxProps> = (props) => {
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
    <StyledAsideHelperInfoBoxWrapper backgroundColor={backgroundColor} className={className}>
      <StyledHelperInfoTextWrapper>
        <StyledHelperInfoTextHeader>{helperInfoTextHeader}</StyledHelperInfoTextHeader>
        <StyledHelperInfoText>{helperInfoText}</StyledHelperInfoText>
      </StyledHelperInfoTextWrapper>

      {helperInfoImageUrl && (
        <StyledAsideHelperInfoImage
          alt={helperInfoImageAltTextNoNull}
          height={height}
          src={helperInfoImageUrl}
          width={width}
        />
      )}
    </StyledAsideHelperInfoBoxWrapper>
  );
};

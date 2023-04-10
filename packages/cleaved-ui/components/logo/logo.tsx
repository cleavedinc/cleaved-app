// tslint:disable:max-line-length
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { COLORS, mediaQueries } from "../../theme";

import { LogoSVG } from "./logo-svg";

type LogoProps = StyledLogoTextProps & {
  className?: string;
  color?: string;
  companyName: string;
  height?: string;
  margin?: string;
  url: string;
  width?: string;
};

type StyledLogoTextProps = {
  isLogoTextVisible?: boolean;
};

const StyledLogoHref = styled.a`
  align-items: center;
  color: ${COLORS.GRAY_900};
  display: flex;
  justify-content: flex-start;

  :hover {
    color: ${COLORS.GRAY_900};
  }

  ${mediaQueries.SM} {
    display: flex;
  }
`;

const StyledLogoText = styled.span<StyledLogoTextProps>`
  display: ${(props) => (props.isLogoTextVisible ? "inline-block" : "none")};
`;

export const Logo: FunctionComponent<LogoProps> = (props) => {
  const { className, color, companyName, height, isLogoTextVisible, margin, url, width } = props;

  return (
    <StyledLogoHref className={className} href={url}>
      <LogoSVG className={className} color={color} height={height} margin={margin} width={width} />
      <StyledLogoText isLogoTextVisible={isLogoTextVisible}>{companyName}</StyledLogoText>
    </StyledLogoHref>
  );
};

// tslint:disable:max-line-length
import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { mediaQueries } from "../../theme";

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
  logoTextVisible?: string;
};

const StyledLogoHref = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.baseLogo};
  display: flex;
  justify-content: flex-start;

  :hover {
    color: ${({ theme }) => theme.colors.baseLogo};
  }

  ${mediaQueries.SM} {
    display: flex;
  }
`;

const StyledLogoText = styled.span<StyledLogoTextProps>`
  display: ${(props) => (props.logoTextVisible === "true" ? "inline-block" : "none")};
`;

export const Logo: FunctionComponent<LogoProps> = (props) => {
  const { className, color, companyName, height, logoTextVisible, margin, url, width } = props;

  return (
    <StyledLogoHref className={className} href={url}>
      <LogoSVG className={className} color={color} height={height} margin={margin} width={width} />
      <StyledLogoText logoTextVisible={logoTextVisible}>{companyName}</StyledLogoText>
    </StyledLogoHref>
  );
};

// tslint:disable:max-line-length
import React, { FunctionComponent } from "react";
import styled, { useTheme } from "styled-components";

type LogoSVGProps = StyledLogoSVGProps & {
  className?: string;
  color?: string;
  height?: string;
  width?: string;
};

type StyledLogoSVGProps = {
  margin?: string;
};

const StyledLogoSVG = styled.svg<StyledLogoSVGProps>`
  ${(props) => (props.margin ? `margin: ${props.margin};` : null)}
`;

export const LogoSVG: FunctionComponent<LogoSVGProps> = (props) => {
  const { className, color, height, margin, width } = props;
  const theme = useTheme();

  // width height viewbox was 34
  return (
    <StyledLogoSVG
      className={className}
      width={width || "180"}
      height={height || "180"}
      margin={margin}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M179.176 77.767C162.695 76.003 124.195 72.3234 81.1046 75.1516C81.1046 78.429 81.9951 82.7989 82.8857 87.1688C84.6668 95.9086 86.4478 104.649 81.1046 104.649C71.7857 105.474 62.8611 106.599 54.314 107.677C35.14 110.094 17.8651 112.272 2.29696 110.292C0.794135 103.771 0 96.978 0 90C0 40.2944 40.2944 0 90 0C135.556 0 173.207 33.8479 179.176 77.767ZM172.289 126.504C142.752 120.399 100.349 118.866 83.5706 119.397C75.277 119.659 60.295 121.435 45.3249 123.209C30.8126 124.929 16.3116 126.647 7.9261 126.985C22.0345 158.244 53.4766 180 90 180C126.71 180 158.287 158.021 172.289 126.504Z"
        fill={color || theme.colors.baseLogo}
      />
    </StyledLogoSVG>
  );
};

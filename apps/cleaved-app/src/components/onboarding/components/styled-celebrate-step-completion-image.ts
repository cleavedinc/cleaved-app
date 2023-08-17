import styled from "styled-components";

import { mediaQueries } from "@cleaved/ui";

type StyledCelebrateStepCompletionImageProps = {
  height?: string;
  heightMobile?: string;
  width?: string;
  widthMobile?: string;
};

export const StyledCelebrateStepCompletionImage = styled.img<StyledCelebrateStepCompletionImageProps>`
  object-fit: cover;
  height: ${(props) => (props.heightMobile ? props.heightMobile : "100%")};
  width: ${(props) => (props.widthMobile ? props.widthMobile : "100%")};

  ${mediaQueries.SM} {
    margin-left: auto;
    height: ${(props) => (props.height ? props.height : "100%")};
    width: ${(props) => (props.width ? props.width : "100%")};
  }
`;

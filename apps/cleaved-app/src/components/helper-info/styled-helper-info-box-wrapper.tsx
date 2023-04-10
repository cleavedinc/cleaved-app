import styled from "styled-components";

import { BoxHelperInfo, COLORS, mediaQueries } from "@cleaved/ui";

type StyledHelperInfoBoxWrapperProps = {
  backgroundColor?: string;
};

export const StyledHelperInfoBoxWrapper = styled(BoxHelperInfo)<StyledHelperInfoBoxWrapperProps>`
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : COLORS.TAN_300)};
  display: flex;
  flex-direction: column;

  ${mediaQueries.SM} {
    flex-direction: row;
  }
`;

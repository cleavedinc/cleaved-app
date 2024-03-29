import styled from "styled-components";

import { BoxHelperInfo, mediaQueries } from "@cleaved/ui";

type StyledHelperInfoBoxWrapperProps = {
  backgroundColor?: string;
};

export const StyledHelperInfoBoxWrapper = styled(BoxHelperInfo)<StyledHelperInfoBoxWrapperProps>`
  display: none;

  ${mediaQueries.SM} {
    align-items: center;
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : ({ theme }) => theme.colors.helperInfoBoxWrapper_backgroundColor};
    display: flex;
    flex-direction: row;
  }
`;

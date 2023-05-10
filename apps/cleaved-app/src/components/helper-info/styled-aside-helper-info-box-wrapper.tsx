import styled from "styled-components";

import { BoxHelperInfo } from "@cleaved/ui";

type StyledAsideHelperInfoBoxWrapperProps = {
  backgroundColor?: string;
};

export const StyledAsideHelperInfoBoxWrapper = styled(BoxHelperInfo)<StyledAsideHelperInfoBoxWrapperProps>`
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ({ theme }) => theme.colors.helperInfoBoxWrapper_backgroundColor};
  display: flex;
  flex-direction: column;
`;

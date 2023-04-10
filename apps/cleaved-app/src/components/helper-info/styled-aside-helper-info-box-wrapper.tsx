import styled from "styled-components";

import { BoxHelperInfo, COLORS } from "@cleaved/ui";

type StyledAsideHelperInfoBoxWrapperProps = {
  backgroundColor?: string;
};

export const StyledAsideHelperInfoBoxWrapper = styled(BoxHelperInfo)<StyledAsideHelperInfoBoxWrapperProps>`
  align-items: center;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : COLORS.TAN_300)};
  display: flex;
  flex-direction: column;
`;

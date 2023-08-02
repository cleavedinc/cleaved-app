import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box } from "@cleaved/ui";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountMembershipDataWrapper: FunctionComponent = () => {
  return <StyledBox>membership plans outlined here.</StyledBox>;
};

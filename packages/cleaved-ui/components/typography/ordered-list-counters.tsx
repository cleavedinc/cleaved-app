import styled from "styled-components";
import { SPACING_PX } from "../../theme";

export const OrderedListCounters = styled.ol`
  counter-reset: item;
  margin-bottom: ${SPACING_PX.THREE};
  padding-left: 16px;
`;

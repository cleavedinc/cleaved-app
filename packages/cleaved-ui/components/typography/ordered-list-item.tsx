import styled from "styled-components";

export const OrderedListItem = styled.li`
  & + & {
    margin-top: 16px;
  }
`;

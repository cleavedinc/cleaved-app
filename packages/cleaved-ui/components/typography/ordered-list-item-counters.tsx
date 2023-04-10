import styled from "styled-components";

export const OrderedListItemCounters = styled.li`
  & + & {
    margin-top: 16px;
  }

  counter-increment: item;
  display: table;

  &:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding: 0 10px 0 0;
  }
`;

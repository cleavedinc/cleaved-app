import styled from "styled-components";

type EmojiClappingHandsProps = {
  fontSize?: string;
};

export const EmojiClappingHands = styled.div<EmojiClappingHandsProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &::before {
    content: "👏";
  }
`;

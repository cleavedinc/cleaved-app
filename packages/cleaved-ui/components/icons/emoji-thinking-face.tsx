import styled from "styled-components";

type EmojiThinkingFaceProps = {
  fontSize?: string;
};

export const EmojiThinkingFace = styled.div<EmojiThinkingFaceProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &::before {
    content: "🤔";
  }
`;

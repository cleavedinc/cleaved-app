import styled from "styled-components";

type EmojiPartyPopperProps = {
  fontSize?: string;
};

export const EmojiPartyPopper = styled.div<EmojiPartyPopperProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &::before {
    content: "🎉";
  }
`;

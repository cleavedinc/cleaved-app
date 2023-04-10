import styled from "styled-components";

type EmojiEyesProps = {
  fontSize?: string;
};

export const EmojiEyes = styled.div<EmojiEyesProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &::before {
    content: "👀";
  }
`;

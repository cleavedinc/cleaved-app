import styled from "styled-components";

type EmojiSmilingFaceWithStarEyesProps = {
  fontSize?: string;
};

export const EmojiSmilingFace = styled.div<EmojiSmilingFaceWithStarEyesProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &::before {
    content: "🙂";
  }
`;

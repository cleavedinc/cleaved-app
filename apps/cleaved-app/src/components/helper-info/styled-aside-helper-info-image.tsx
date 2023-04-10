import styled from "styled-components";

type StyledAsideHelperInfoImageProps = {
  height?: string;
  width?: string;
};

export const StyledAsideHelperInfoImage = styled.img<StyledAsideHelperInfoImageProps>`
  margin-left: auto;
  object-fit: cover;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

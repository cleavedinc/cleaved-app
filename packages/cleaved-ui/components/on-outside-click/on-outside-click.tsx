import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

export type OnOutsideClickProps = StyledOnOutsideClickWrapperProps & {
  children: ReactNode;
  className?: string;
  onOutsideClick: () => void;
};

type StyledOnOutsideClickWrapperProps = {
  display?: string;
};

const StyledOnOutsideClickWrapper = styled.div<StyledOnOutsideClickWrapperProps>`
  display: ${(props) => (props.display ? props.display : "block")};
`;

export const OnOutsideClick: FunctionComponent<OnOutsideClickProps> = (props) => {
  const { children, className, display, onOutsideClick } = props;
  const node = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (node && node.current && !node.current.contains(e.target)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <StyledOnOutsideClickWrapper className={className} display={display} ref={node}>
      {children}
    </StyledOnOutsideClickWrapper>
  );
};

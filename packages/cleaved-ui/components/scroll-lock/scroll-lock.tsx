import React, { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

type ScrollLockProps = {
  children: ReactNode;
  className?: string;
};

const StyledBox = styled.div`
  height: 100%;
  -webkit-overflow-scrolling: touch;
`;

/**
 * Pass the content you wish to be scrollable as a child. It won't work if you pass the parent of that content.
 *  https://github.com/willmcpo/body-scroll-lock
 */
export const ScrollLock: FunctionComponent<ScrollLockProps> = ({ children, className }) => {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (node && node.current) {
      disableBodyScroll(node.current, { reserveScrollBarGap: true });
    }

    return () => {
      if (node && node.current) {
        enableBodyScroll(node.current);
      }

      clearAllBodyScrollLocks();
    };
  }, []);

  if (children) {
    return (
      <StyledBox className={className} ref={node}>
        {children}
      </StyledBox>
    );
  }

  return <div ref={node} />;
};

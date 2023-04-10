import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES } from "../../theme";
import { CommentIcon } from "../icons";

type EmptyStateNoContentProps = EmptyStateNoContentMessageProps & {
  className?: string;
  icon?: React.ReactNode | string;
  iconSize?: string;
  message: string | React.ReactNode;
};

type EmptyStateNoContentMessageProps = {
  messageFontSize?: string;
};

const EmptyStateNoContentMessage = styled.div<EmptyStateNoContentMessageProps>`
  font-size: ${(props) => (props.messageFontSize ? props.messageFontSize : FONT_SIZES.MEDIUM)};
`;

const EmptyStateNoContentWrapper = styled.div`
  text-align: center;
`;

export const EmptyStateNoContent: FunctionComponent<EmptyStateNoContentProps> = ({
  className,
  icon,
  iconSize,
  message,
  messageFontSize,
}) => {
  return (
    <EmptyStateNoContentWrapper className={className}>
      <EmptyStateNoContentMessage messageFontSize={messageFontSize}>
        {icon || <CommentIcon iconSize={iconSize} />}
        {message}
      </EmptyStateNoContentMessage>
    </EmptyStateNoContentWrapper>
  );
};

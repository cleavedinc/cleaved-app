import React, { FunctionComponent } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { SPACING } from "@cleaved/ui";

type DisplayMarkdownProps = {
  message: string;
};

const StyledMessage = styled(ReactMarkdown)`
  overflow-wrap: anywhere;
  padding: 0 ${SPACING.MEDIUM} ${SPACING.MEDIUM} ${SPACING.MEDIUM};
  white-space: pre-line;

  ul,
  ol {
    margin: 0 0 ${SPACING.MEDIUM} ${SPACING.XLARGE};
    padding-left: 0;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }
`;

export const DisplayMarkdown: FunctionComponent<DisplayMarkdownProps> = (props) => {
  const { message } = props;

  return (
    <StyledMessage remarkPlugins={[remarkGfm]} linkTarget={"_blank"}>
      {message}
    </StyledMessage>
  );
};

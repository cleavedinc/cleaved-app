import { css } from "styled-components";
import { RADIUS, SPACING } from "@cleaved/ui";

export const markdownStylesBase = css`
  .editor-input {
    border-radius: ${RADIUS.MEDIUM};
    outline: none;
    overflow: auto;
    padding: ${SPACING.SMALL};
  }

  a {
    color: ${({ theme }) => theme.colors.baseLink_color};

    &:hover {
      color: ${({ theme }) => theme.colors.baseLink_colorHover};
    }
  }

  del,
  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  p {
    margin-bottom: ${SPACING.MEDIUM};
  }

  ul,
  ol {
    margin: 0 0 ${SPACING.MEDIUM} ${SPACING.XLARGE};
    padding-left: 0;
  }
`;

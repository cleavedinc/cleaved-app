import { css } from "styled-components";
import { RADIUS, SPACING } from "@cleaved/ui";

export const markdownStylesBase = css`
  .editor-inner {
    position: relative;
  }

  .editor-input {
    border-radius: ${RADIUS.MEDIUM};
    outline: none;
    overflow: auto;
    padding: ${SPACING.SMALL};
  }

  .editor-placeholder {
    color: ${({ theme }) => theme.colors.basePlaceholderText_color};
    display: inline-block;
    font-style: initial;
    left: 8px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    top: 8px;
    user-select: none;
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

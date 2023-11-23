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

  /* Lexical editor styles for the link portal */
  .link-editor {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    max-width: 400px;
    width: 100%;
    opacity: 0;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: 0 0 8px 8px;
    transition: opacity 0.5s;
    will-change: transform;
  }

  .link-editor .button {
    width: 20px;
    height: 20px;
    display: inline-block;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 2px;
  }

  .link-editor .button.hovered {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: #eee;
  }

  .link-editor .button i,
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: -0.25em;
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

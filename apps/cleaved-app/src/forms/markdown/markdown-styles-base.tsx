import { css } from "styled-components";
import { FONTS, FONT_SIZES, RADIUS, scrollbar, SPACING } from "@cleaved/ui";

// this was wrapping the editor on the form (main post form)
// const StyledMarkdownEditorWrapper = styled.div`
//   ${markdownStylesBase}

//   .ql-container {
//     max-height: 40vh;
//   }
// `;

// this was wrapping the editor (comment form)
// const StyledMarkdownEditorWrapper = styled.div`
//   ${markdownStylesBase}

//   .ql-container {
//     max-height: 20vh;
//   }
// `;

export const markdownStylesBase = css`
  .ql-container {
    background-color: transparent;
    border: none;
    font-family: ${FONTS.SANS_SERIF_1};
    font-size: ${FONT_SIZES.MEDIUM};
    outline: none;
    overflow: auto;
    padding: ${SPACING.MEDIUM} 0 0;
    resize: none;

    .ql-tooltip.ql-editing {
      border-radius: ${RADIUS.MEDIUM};
      left: 0 !important;
      transform: translateY(0);
      z-index: 99999;

      input {
        border-radius: ${RADIUS.MEDIUM};
      }
    }
  }

  .ql-editor {
    padding: 0 ${SPACING.MEDIUM} ${SPACING.LARGE} 0;

    /* Scroll bar styles - These styles are duplicates (original are in cleaved/ui) due to ReactQuill not being able to handle the styled component theme prop */
    ::-webkit-scrollbar {
      ${scrollbar}
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.body_backgroundColor};
      border-radius: ${RADIUS.MEDIUM};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${RADIUS.MEDIUM};
      box-shadow: inset 0 0 50px ${({ theme }) => theme.colors.baseIcon_color};
    }

    ::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 50px ${({ theme }) => theme.colors.baseIcon_color};
    }

    /* placeholder */
    &::before {
      color: ${({ theme }) => theme.colors.basePlaceholderText_color};
      left: 0;
      font-style: initial;
      right: 0;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.baseLink_color};

    &:hover {
      color: ${({ theme }) => theme.colors.baseLink_colorHover};
    }
  }

  del {
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

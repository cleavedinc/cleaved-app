import React, { FunctionComponent, memo, useContext, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
import styled, { useTheme } from "styled-components";
import ReactQuill from "react-quill";

import {
  BORDERS,
  FONTS,
  FONT_SIZES,
  RADIUS,
  scrollbar,
  SPACING,
  SPACING_PX,
  ThemeLightType,
  ThemeDarkType,
} from "@cleaved/ui";

import { PostsContext } from "../../../contexts";

import "react-quill/dist/quill.snow.css";

type PostFormEditorProps = {
  className?: string;
  name: string;
  placeholder?: string;
};

type StyledReactQuillProps = {
  styledComponentTheme: ThemeLightType | ThemeDarkType;
};

const StyledReactQuill = styled(ReactQuill)<StyledReactQuillProps>`
  margin-bottom: ${SPACING.MEDIUM};

  .ql-container {
    background-color: transparent;
    border: none;
    font-family: ${FONTS.SANS_SERIF_1};
    font-size: ${FONT_SIZES.MEDIUM};
    height: 250px;
    outline: none;
    overflow-y: auto;
    padding: ${SPACING.MEDIUM} 0;
    resize: none;
  }

  .ql-editor {
    padding: 0 ${SPACING.MEDIUM} 0 0;

    /* These styles are duplicate (original are in cleaved/ui) due to ReactQuill not being able to handle the styled component theme prop */
    blockquote {
      background-color: ${({ styledComponentTheme }) => styledComponentTheme.colors.body_backgroundColor};
      border-left: ${BORDERS.SOLID_5PX} ${({ styledComponentTheme }) => styledComponentTheme.borders.primary_color};
      border-radius: ${RADIUS.SMALL};
      color: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseText_color};
      margin-bottom: ${SPACING.MEDIUM};
      padding: ${SPACING.MEDIUM};
    }

    blockquote:before {
      color: ${({ styledComponentTheme }) => styledComponentTheme.borders.primary_color};
      content: '"';
      font-size: ${FONT_SIZES.XXXXLARGE};
      line-height: 0;
      margin-right: ${SPACING.SMALL};
      vertical-align: -0.4em;
    }

    blockquote p {
      display: inline;
    }

    /* Scroll bar styles - These styles are duplicates (original are in cleaved/ui) due to ReactQuill not being able to handle the styled component theme prop */
    ::-webkit-scrollbar {
      ${scrollbar}
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ styledComponentTheme }) => styledComponentTheme.colors.body_backgroundColor};
      border-radius: ${RADIUS.MEDIUM};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${RADIUS.MEDIUM};
      box-shadow: inset 0 0 50px ${({ styledComponentTheme }) => styledComponentTheme.colors.baseIcon_color};
    }

    ::-webkit-scrollbar-thumb:hover {
      box-shadow: inset 0 0 50px ${({ styledComponentTheme }) => styledComponentTheme.colors.baseIcon_color};
    }

    /* placeholder */
    &::before {
      color: ${({ styledComponentTheme }) => styledComponentTheme.colors.basePlaceholderText_color};
      left: 0;
      font-style: initial;
      right: 0;
    }
  }

  .ql-toolbar {
    border: none;
    padding-left: 0;

    .ql-formats {
      align-items: center;
      display: inline-flex;
      margin-right: 0;

      button {
        &:first-child {
          padding-left: 0;
          width: 22px;
        }
      }

      /* pipe between toolbar sections */
      &:not(:last-child) {
        ::after {
          color: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseBordersAndShadows_color};
          content: "|";
          display: inline-block;
          margin: 0 ${SPACING.MEDIUM};
        }
      }
    }

    /* toolbar icon styles */
    button {
      .ql-fill {
        fill: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseIcon_color};
      }

      .ql-stroke {
        stroke: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseIcon_color};
      }

      &:hover,
      &.ql-active {
        .ql-fill {
          fill: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseLink_color};
        }

        .ql-stroke {
          stroke: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseLink_color};
        }
      }
    }
  }

  a {
    color: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseLink_color};

    &:hover {
      color: ${({ styledComponentTheme }) => styledComponentTheme.colors.baseLink_colorHover};
    }
  }

  del {
    text-decoration: line-through;
  }

  p {
    margin-bottom: ${SPACING_PX.THREE};
  }

  ul,
  ol {
    margin: 0 0 ${SPACING.MEDIUM} ${SPACING.XLARGE};
    padding-left: 0;
  }
`;

const PostFormEditorMemo: FunctionComponent<PostFormEditorProps> = (props) => {
  const { className, name, placeholder } = props;
  const { setProjectPostFormIsDirty } = useContext(PostsContext);
  const { dirty, isValid, setFieldValue, values } = useFormikContext();

  // Using the theme hook due to ReactQuill not liking the normal pros way to use styled component theme.
  const theme = useTheme();

  const modules = {
    toolbar: [["bold", "italic", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["link"]],
  };

  const formats = ["bold", "italic", "strike", "blockquote", "list", "bullet", "link"];

  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };

  // This is to autofocus the editor
  const reactQuillRef = useRef<ReactQuill>(null);
  useEffect(() => {
    if (
      reactQuillRef &&
      reactQuillRef.current &&
      reactQuillRef.current.unprivilegedEditor &&
      reactQuillRef.current.editor
    ) {
      const length = reactQuillRef.current.unprivilegedEditor.getLength();
      const selection = { index: length, length: length };

      reactQuillRef.current.setEditorSelection(reactQuillRef.current.editor, selection);
    }
  }, [reactQuillRef]);

  // Used to figure out if the form is dirty at the parent level
  useEffect(() => {
    if (isValid && dirty) {
      console.log("dirty");
      setProjectPostFormIsDirty(true);
    }

    if (!(isValid && dirty)) {
      console.log("clean");
      setProjectPostFormIsDirty(false);
    }
  }, [isValid, dirty]);

  return (
    <StyledReactQuill
      className={className}
      formats={formats}
      modules={modules}
      onChange={handleChange}
      placeholder={placeholder}
      ref={reactQuillRef}
      styledComponentTheme={theme}
      theme="snow"
      value={values[name]}
    />
  );
};

export const PostFormEditor = memo(PostFormEditorMemo);

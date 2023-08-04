import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
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
    overflow: hidden;
    padding: ${SPACING.MEDIUM} 0 ${SPACING.LARGE};
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
    padding: 0 ${SPACING.MEDIUM} 0 0;

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

export const PostFormEditor: FunctionComponent<PostFormEditorProps> = (props) => {
  const { className, name, placeholder } = props;
  const { projectPostFormIsDirty, setProjectPostFormIsDirty } = useContext(PostsContext);
  const { dirty, isValid, isValidating, setFieldValue, status, values } = useFormikContext();

  // Using the theme hook due to ReactQuill not liking the normal pros way to use styled component theme.
  const theme = useTheme();

  const modules = {
    toolbar: [["bold", "italic", "strike"], [{ list: "ordered" }, { list: "bullet" }], ["link"]],
  };

  const formats = ["bold", "italic", "strike", "list", "bullet", "link"];

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
    if (!isValidating && isValid && dirty) {
      setProjectPostFormIsDirty(true);
    }

    if (!isValidating && !(isValid && dirty)) {
      setProjectPostFormIsDirty(false);
    }
  }, [isValid, isValidating, dirty, projectPostFormIsDirty, setProjectPostFormIsDirty, status, values]);

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

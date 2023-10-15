import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
import styled, { useTheme } from "styled-components";
import ReactQuill from "react-quill";

import { SPACING, ThemeLightType, ThemeDarkType } from "@cleaved/ui";

import { PostFormContext } from "../../contexts";

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
        &::after {
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
`;

export const MarkdownEditor: FunctionComponent<PostFormEditorProps> = (props) => {
  const { className, name, placeholder } = props;
  const { projectPostFormIsDirty, setProjectPostFormIsDirty } = useContext(PostFormContext);
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

import React, { FunctionComponent, useRef, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";

import { markdownToHtml, htmlToMarkdown } from "./markdown-parser";

import "react-quill/dist/quill.snow.css";

// same on the post form
interface EditorContentChanged {
  html: string;
  markdown: string;
}

type PostFormEditorProps = {
  className?: string;
  field: any;
  onEditorContentChanged: (changes: EditorContentChanged) => void;
  setFieldTouched: any;
};

const StyledReactQuill = styled(ReactQuill)`
  .quill {
    .ql-toolbar {
      button {
        &.ql-active {
          color: red;
        }
      }
    }
  }
`;

const modules = {
  toolbar: [["bold", "italic", "underline", "strike"], [{ list: "ordered" }, { list: "bullet" }], ["link"]],
};

const formats = ["bold", "italic", "underline", "strike", "list", "bullet", "link"];

export const PostFormEditor: FunctionComponent<PostFormEditorProps> = (props) => {
  const { className, field, onEditorContentChanged } = props;
  const [value, setValue] = useState<string>(markdownToHtml(field.value || ""));
  const reactQuillRef = useRef<ReactQuill>(null);

  const onChange = (content: string) => {
    setValue(content);

    if (onEditorContentChanged) {
      onEditorContentChanged({
        html: content,
        markdown: htmlToMarkdown(content),
      });
    }
  };

  return (
    <StyledReactQuill
      className={className}
      formats={formats}
      modules={modules}
      onChange={onChange}
      ref={reactQuillRef}
      theme="snow"
      value={value}
    />
  );
};

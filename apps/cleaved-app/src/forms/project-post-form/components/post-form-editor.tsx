import React, { FunctionComponent, useRef, useState } from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";
import ReactQuill from "react-quill";

import { markdownToHtml, htmlToMarkdown } from "./markdown-parser";

import "react-quill/dist/quill.snow.css";

type PostFormEditorProps = {
  className?: string;
  name: string;
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
  const { className, name } = props;
  const { values, setFieldValue, setFieldTouched } = useFormikContext<any>();

  const handleChange = (value: string) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);
  };

  // const [value, setValue] = useState<string>(markdownToHtml(field.value || ""));

  // const onChange = (content: string) => {
  //   setValue(content);

  //   if (onEditorContentChanged) {
  //     onEditorContentChanged({
  //       html: content,
  //       markdown: htmlToMarkdown(content),
  //     });
  //   }
  // };

  return (
    <StyledReactQuill
      className={className}
      formats={formats}
      modules={modules}
      onChange={handleChange}
      theme="snow"
      value={values[name]}
    />
  );
};

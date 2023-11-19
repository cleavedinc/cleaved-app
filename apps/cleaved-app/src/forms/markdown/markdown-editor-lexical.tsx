import React, { FunctionComponent, useContext, useEffect } from "react";
import { useFormikContext } from "formik";

import { CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

// import styled, { useTheme } from "styled-components";

// import { SPACING, ThemeLightType, ThemeDarkType } from "@cleaved/ui";
// import { logError, RollbarLogLevels } from "@cleaved/helpers";

import { PostFormContext } from "../../contexts";

import { InsertMarkdown, ToolbarPlugin } from "./plugins";
import { basicTheme } from "./themes";

type MarkdownEditorLexicalProps = {
  className?: string;
  name: string;
  placeholder?: string;
};

const editorConfig = {
  namespace: "MarkdownEditorLexical",
  theme: basicTheme,
  onError(error: any) {
    // logError(RollbarLogLevels.error, "Error: Markdown editor error", error);
  },
  nodes: [HeadingNode, QuoteNode, CodeNode, ListNode, ListItemNode, LinkNode],
};

export const MarkdownEditorLexical: FunctionComponent<MarkdownEditorLexicalProps> = (props) => {
  const { name, placeholder } = props;
  const { projectPostFormIsDirty, setProjectPostFormIsDirty } = useContext(PostFormContext);
  const { dirty, isValid, isValidating, setFieldValue, status, values } = useFormikContext();

  const onChange = (editorState) => {
    editorState.read(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS);
      setFieldValue(name, markdown);
    });
  };

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
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<div>{placeholder}</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          {values && values?.body && <InsertMarkdown markdown={values?.body} />}
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
};

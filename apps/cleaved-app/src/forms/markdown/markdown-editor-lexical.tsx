import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useFormikContext } from "formik";

import { $createTextNode, $getRoot } from "lexical";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode, $createCodeNode, $isCodeNode } from "@lexical/code";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";

import styled, { useTheme } from "styled-components";

import { SPACING, ThemeLightType, ThemeDarkType } from "@cleaved/ui";
import { logError, RollbarLogLevels } from "@cleaved/helpers";

import { PostFormContext } from "../../contexts";

import { InsertMarkdown, OnChangePlugin, ToolbarPlugin } from "./plugins";
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
    logError(RollbarLogLevels.error, "Error: Markdown editor error", error);
  },
  nodes: [HeadingNode, QuoteNode, CodeNode, ListNode, ListItemNode, LinkNode],
};

export const MarkdownEditorLexical: FunctionComponent<MarkdownEditorLexicalProps> = (props) => {
  const { className, name, placeholder } = props;
  const { projectPostFormIsDirty, setProjectPostFormIsDirty } = useContext(PostFormContext);
  const { dirty, isValid, isValidating, setFieldValue, status, values } = useFormikContext();
  const [inputEditValue, setInputEditValue] = useState("");

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

  // Set Edit input value
  useEffect(() => {
    console.log("00000 values.body", values.body);

    if (values && values.body) {
      console.log("111111 values.body", values.body);

      setInputEditValue(values.body);
    }
  }, [values]);

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
          <InsertMarkdown markdown={inputEditValue} />
          <OnChangePlugin onChange={onChange} />
        </div>
      </div>
    </LexicalComposer>
  );
};

import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useFormikContext } from "formik";
import styled from "styled-components";

import { CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { $convertToMarkdownString, TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";

import { PostFormContext } from "../../contexts";

import { AutoLinkPlugin, FloatingLinkEditorPlugin, InsertMarkdown, ToolbarPlugin } from "./plugins";
import { Placeholder } from "./placeholder";
import { basicTheme } from "./themes";

type MarkdownEditorLexicalProps = {
  className?: string;
  name: string;
  placeholder?: string;
};

const StyledEditorInner = styled.div`
  position: relative;
`;

const editorConfig = {
  namespace: "MarkdownEditorLexical",
  theme: basicTheme,
  onError(error: any) {
    // logError(RollbarLogLevels.error, "Error: Markdown editor error", error);
  },
  nodes: [AutoLinkNode, CodeNode, HeadingNode, ListItemNode, LinkNode, ListNode, QuoteNode],
};

export const MarkdownEditorLexical: FunctionComponent<MarkdownEditorLexicalProps> = (props) => {
  const { name, placeholder } = props;
  const { projectPostFormIsDirty, setProjectPostFormIsDirty } = useContext(PostFormContext);
  const { dirty, isValid, isValidating, setFieldValue, status, values } = useFormikContext();
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

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
        <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />

        <StyledEditorInner className="editor-inner">
          <RichTextPlugin
            contentEditable={
              <div className="editor-scroller">
                <div className="editor" ref={onRef}>
                  {/* Keep .editor-input class as it's referenced across multiple components */}
                  <ContentEditable className="editor-input" />
                </div>
              </div>
            }
            placeholder={<Placeholder placeholderText={placeholder} />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          {values && values?.body && <InsertMarkdown markdown={values?.body} />}

          {floatingAnchorElem && (
            <FloatingLinkEditorPlugin
              anchorElem={floatingAnchorElem}
              isLinkEditMode={isLinkEditMode}
              setIsLinkEditMode={setIsLinkEditMode}
            />
          )}

          <HistoryPlugin />
          <AutoFocusPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <OnChangePlugin onChange={onChange} />
        </StyledEditorInner>
      </div>
    </LexicalComposer>
  );
};

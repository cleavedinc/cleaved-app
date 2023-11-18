import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";

export const InsertMarkdown = (markdown: { markdown: any }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      console.log("InsertMarkdown", markdown.markdown);

      if (markdown && markdown?.markdown) {
        $convertFromMarkdownString(markdown?.markdown, TRANSFORMERS);
      }
    });
  }, [editor, markdown.markdown]);

  return null;
};

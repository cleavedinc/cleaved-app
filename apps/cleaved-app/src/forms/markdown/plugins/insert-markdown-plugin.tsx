import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $convertFromMarkdownString, TRANSFORMERS } from "@lexical/markdown";

export const InsertMarkdown = (markdown: { markdown: string }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      console.log("InsertMarkdown", markdown.markdown);

      if (markdown && markdown?.markdown) {
        $convertFromMarkdownString(markdown?.markdown, TRANSFORMERS);
      }
    });
  }, [editor]); // TODO: FIX THIS - note: do not add markdown to this dep array. It will cause an infinate loop

  return null;
};

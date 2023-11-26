import { Dispatch } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { useFloatingLinkEditorToolbar } from "./use-floating-link-editor-toolbar";

export const FloatingLinkEditorPlugin = ({
  anchorElem = document.body,
  isLinkEditMode,
  setIsLinkEditMode,
}: {
  anchorElem?: HTMLElement;
  isLinkEditMode: boolean;
  setIsLinkEditMode: Dispatch<boolean>;
}): JSX.Element | null => {
  const [editor] = useLexicalComposerContext();

  return useFloatingLinkEditorToolbar(editor, anchorElem, isLinkEditMode, setIsLinkEditMode);
};

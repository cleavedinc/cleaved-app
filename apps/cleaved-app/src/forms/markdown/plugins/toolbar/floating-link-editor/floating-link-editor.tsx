import React, { Dispatch, useCallback, useEffect, useRef, useState } from "react";

import styled, { useTheme } from "styled-components";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $findMatchingParent, mergeRegister } from "@lexical/utils";
import {
  $getSelection,
  $isRangeSelection,
  COMMAND_PRIORITY_HIGH,
  COMMAND_PRIORITY_LOW,
  KEY_ESCAPE_COMMAND,
  LexicalEditor,
  SELECTION_CHANGE_COMMAND,
} from "lexical";

import {
  BORDERS,
  buttonPrimaryBase,
  CloseIcon,
  FONT_SIZES,
  RADIUS,
  removeDefaultButtonStyles,
  SPACING,
  TrashIcon,
} from "@cleaved/ui";

import { useTranslator } from "../../../../../hooks";

import { getSelectedNode, sanitizeUrl, setFloatingElemPositionForLinkEditor } from "../../../utils";

const StyledButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
`;

const StyledButtonPrimary = styled.button`
  ${buttonPrimaryBase}
  align-items: center;
  border-radius: ${RADIUS.MEDIUM};
  cursor: pointer;
  display: inline-flex;
  font-size: ${FONT_SIZES.SMALL};
  justify-content: center;
  padding: ${SPACING.BASE} ${SPACING.SMALL};
`;

const StyledCloseIcon = styled(CloseIcon)``;

const StyledLinkEditor = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseDropdownMenu_backgroundColor};
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.MEDIUM};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
  left: 0;
  max-width: 400px;
  opacity: 0;
  padding: ${SPACING.BASE};
  position: absolute;
  top: 0;
  transition: opacity 0.5s;
  width: 100%;
  z-index: 10;

  .link-input {
    background-color: ${({ theme }) => theme.colors.baseInput_backgroundColor};
    border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    border-radius: ${RADIUS.MEDIUM};
    display: flex;
    flex-grow: 1;
    margin-right: ${SPACING.SMALL};
    padding: ${SPACING.BASE} ${SPACING.SMALL};
  }
`;

const StyledLinkHref = styled.a`
  margin-left: ${SPACING.SMALL};
`;

const StyledIconLinkButton = styled.button`
  ${removeDefaultButtonStyles}
  display: flex;
  margin-left: ${SPACING.SMALL};
  padding: ${SPACING.BASE};
`;

const StyledTrashIcon = styled(TrashIcon)``;

export function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
  isLinkEditMode,
  setIsLinkEditMode,
}: {
  editor: LexicalEditor;
  isLink: boolean;
  setIsLink: Dispatch<boolean>;
  anchorElem: HTMLElement;
  isLinkEditMode: boolean;
  setIsLinkEditMode: Dispatch<boolean>;
}): JSX.Element {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const https = "https://";
  const [linkUrl, setLinkUrl] = useState("");
  const [editedLinkUrl, setEditedLinkUrl] = useState(https);
  const [isCreatingNewLink, setIsCreatingNewLink] = useState(true);

  const theme = useTheme();
  const { t } = useTranslator();

  const updateLinkEditor = useCallback(() => {
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;

    if (editorElem === null) {
      return;
    }

    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const linkParent = $findMatchingParent(node, $isLinkNode);

      if (linkParent) {
        setLinkUrl(linkParent.getURL());

        if (isLinkEditMode) {
          setEditedLinkUrl(linkParent.getURL());
        }
      } else if ($isLinkNode(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");

        // TODO: fix this later
        // Close editor if user clicks outside of the link they were editing
        // This is not working atm.
        // if (isLinkEditMode && !isLink) {
        //   setIsLinkEditMode(false);
        // }
      }
    }

    const rootElement = editor.getRootElement();
    if (
      selection !== null &&
      nativeSelection !== null &&
      rootElement !== null &&
      rootElement.contains(nativeSelection.anchorNode) &&
      editor.isEditable()
    ) {
      const domRect: DOMRect | undefined = nativeSelection.focusNode?.parentElement?.getBoundingClientRect();

      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem, isLink);
      }
    } else if (!activeElement || activeElement.className !== "link-input") {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem, isLink);
      }

      setIsLinkEditMode(false);
      setLinkUrl("");
    }

    return true;
  }, [anchorElem, editor, isLink, isLinkEditMode, setIsLinkEditMode]);

  const handleLinkSubmission = () => {
    console.log("handleLinkSubmission");

    if (linkUrl !== "") {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
    }

    setEditedLinkUrl(https);
    setIsLinkEditMode(false);
  };

  const monitorInputInteraction = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLinkSubmission();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsLinkEditMode(false);
    }
  };

  const removeLink = () => {
    setEditedLinkUrl(https);
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  };

  useEffect(() => {
    const scrollerElem = anchorElem.parentElement;

    const update = () => {
      editor.getEditorState().read(() => {
        updateLinkEditor();
      });
    };

    window.addEventListener("resize", update);

    // TODO: this seems broken
    if (scrollerElem) {
      scrollerElem.addEventListener("scroll", update);
    }

    return () => {
      window.removeEventListener("resize", update);

      if (scrollerElem) {
        scrollerElem.removeEventListener("scroll", update);
      }
    };
  }, [anchorElem.parentElement, editor, isLink, updateLinkEditor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateLinkEditor();
        });
      }),

      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateLinkEditor();
          return true;
        },

        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }

          return false;
        },
        COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, updateLinkEditor, setIsLink, isLink]);

  useEffect(() => {
    editor.getEditorState().read(() => {
      updateLinkEditor();
    });
  }, [editor, updateLinkEditor]);

  useEffect(() => {
    if (isLinkEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLinkEditMode, isLink]);

  const linkAdd = t("post.linkAdd") ? t("post.linkAdd") : undefined;
  const linkEdit = t("post.linkEdit") ? t("post.linkEdit") : undefined;

  return (
    <div>
      {isLink && (
        <StyledLinkEditor className="link-editor" ref={editorRef}>
          {isLinkEditMode && (
            <>
              <input
                ref={inputRef}
                className="link-input"
                value={editedLinkUrl}
                onChange={(event) => {
                  setEditedLinkUrl(event.target.value);
                }}
                onKeyDown={(event) => {
                  monitorInputInteraction(event);
                }}
              />

              <StyledButtonWrapper>
                <StyledButtonPrimary onClick={handleLinkSubmission} tabIndex={0} type="button">
                  {linkAdd}
                </StyledButtonPrimary>

                <StyledIconLinkButton
                  onClick={() => {
                    if (isCreatingNewLink) {
                      // if you create a new link and cancel, remove the link
                      setIsLinkEditMode(false);
                      removeLink();
                    } else {
                      // if you are editing a pre-existing link and cancel, just cancel
                      setIsLinkEditMode(false);
                    }

                    setEditedLinkUrl(https);
                  }}
                  tabIndex={0}
                  type="button"
                >
                  <StyledCloseIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.MEDIUM} />
                </StyledIconLinkButton>
              </StyledButtonWrapper>
            </>
          )}

          {!isLinkEditMode && (
            <>
              <StyledLinkHref href={sanitizeUrl(linkUrl)} target="_blank" rel="noopener noreferrer">
                {linkUrl}
              </StyledLinkHref>

              <StyledButtonWrapper>
                <StyledButtonPrimary
                  onClick={() => {
                    setIsLinkEditMode(true);
                    setIsCreatingNewLink(false);
                    setEditedLinkUrl(linkUrl);
                  }}
                  tabIndex={0}
                  type="button"
                >
                  {linkEdit}
                </StyledButtonPrimary>

                <StyledIconLinkButton
                  onClick={() => {
                    removeLink();
                  }}
                  tabIndex={0}
                  type="button"
                >
                  <StyledTrashIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.MEDIUM} />
                </StyledIconLinkButton>
              </StyledButtonWrapper>
            </>
          )}
        </StyledLinkEditor>
      )}
    </div>
  );
}

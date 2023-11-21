import React, { FunctionComponent, ReactNode, useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { blockquote, blockquoteBefore, blockquoteP, FONTS, FONT_WEIGHTS, themeDark, themeLight } from "@cleaved/ui";

import { ThemeContext } from "../contexts";

type UIProviderTypes = {
  children: ReactNode;
};

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html {
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.baseText_color};
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-family: ${FONTS.SANS_SERIF_1};
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

/* These styles are duplicated in the post-form-editor due to ReactQuill not being able to handle the styled component theme prop */
blockquote {
  ${blockquote}
}

blockquote:before {
  ${blockquoteBefore}
}

blockquote p {
  ${blockquoteP}
}

body {
  background-color: ${({ theme }) => theme.colors.body_backgroundColor};
}

div {
  overflow-wrap: anywhere;
}

p {}

a{
  color: ${({ theme }) => theme.colors.baseLink_color};
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: ${({ theme }) => theme.colors.baseLink_colorHover};
  }
}

strong {
  font-weight: ${FONT_WEIGHTS.BOLD};
}

em{
  font-style: italic;
}

del {
  text-decoration: line-through;
}

ol,
ul {
  list-style: none;
}

/* overrides package style for image carousel */
.react-images__blanket {
  background-color: ${({ theme }) => theme.colors.baseOverlay_backgroundColor} !important;
}

.react-images__container {
  background-color: transparent !important;

  .react-images__header {
    background: linear-gradient(180deg, ${({ theme }) =>
      theme.colors.baseBordersAndShadows_color}, transparent) !important;

    span {
      button:first-child {
        display: none;
      }

      button {
        color: ${({ theme }) => theme.colors.baseIcon_color};
      }
  }
  }

  .react-images__pager{
    .react-images__navigation {
      button {
        background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
        
        svg {
          fill: ${({ theme }) => theme.colors.baseIcon_color};
        }
      }
    }
  }
  

  .react-images__footer {
    color: ${({ theme }) => theme.colors.baseIcon_color};
    background: linear-gradient(0deg, ${({ theme }) =>
      theme.colors.baseBordersAndShadows_color}, transparent) !important;
  }
}

/* Lexical editor styles for the link portal */
.link-editor {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  left: -10000px;
  margin-top: -6px;
  max-width: 300px;
  opacity: 0;
  position: absolute;
  top: -10000px;
  transition: opacity 0.5s;
  width: 100%;
    z-index: 9999;
  }

  .link-editor .link-input {
    box-sizing: border-box;
    background-color: #eee;
    border: 0;
    color: rgb(5, 5, 5);
    display: block;
    border-radius: 15px;
    font-family: inherit;
    font-size: 15px;
    margin: 8px 12px;
    padding: 8px 12px;
    outline: 0;
    position: relative;
    width: calc(100% - 24px);
  }

  .link-editor div.link-edit {
    background-color: red;
    /* background-image: url(images/icons/pencil-fill.svg); */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    bottom: 0;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: -0.25em;
    width: 35px;
  }

  .link-editor .link-input a {
    color: rgb(33, 111, 219);
    display: block;
    margin-right: 30px;
    overflow: hidden;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .link-editor .link-input a:hover {
    text-decoration: underline;
  }

  .link-editor .button {
    cursor: pointer;
    display: inline-block;
    border-radius: 8px;
    height: 20px;
    margin: 0 2px;
    padding: 6px;
    width: 20px;
  }

  .link-editor .button.hovered {
    background-color: #eee;
    display: inline-block;
    height: 20px;
    width: 20px;
  }

  .link-editor .button i,
  .actions i {
    background-size: contain;
    display: inline-block;
    height: 20px;
    vertical-align: -0.25em;
    width: 20px;
  }

/* OLD blockquote styles
blockquote,
q {
  quotes: none;
} */

/* blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
} */

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export const UIProvider: FunctionComponent<UIProviderTypes> = ({ children }) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};

import React, { FunctionComponent, ReactNode, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { FONTS } from "./fonts";
import { FONT_WEIGHTS } from "./font-weights";
import { SPACING_PX } from "./spacing";

import { themeDark } from "./theme-dark";
import { themeLight } from "./theme-light";

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
body {
  background-color: ${({ theme }) => theme.colors.body_backgroundColor};
}
div {
  overflow-wrap: anywhere;
}
p {
  margin-bottom: ${SPACING_PX.FOUR};
}
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
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

export const UIProvider: FunctionComponent<UIProviderTypes> = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // dark || light
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <>
        <GlobalStyles />

        <button onClick={toggleTheme}>
          {isDarkTheme ? (
            <span aria-label="Light mode" role="img">
              🌞
            </span>
          ) : (
            <span aria-label="Dark mode" role="img">
              🌜
            </span>
          )}
        </button>

        {children}
      </>
    </ThemeProvider>
  );
};

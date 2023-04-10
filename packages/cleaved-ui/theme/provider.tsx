import React, { FunctionComponent, ReactNode } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { COLORS } from "./colors";
import { BREAKPOINTS } from "./breakpoints";
import { FONTS } from "./fonts";
import { FONT_SIZES } from "./font-sizes";
import { FONT_WEIGHTS } from "./font-weights";
import { GRID } from "./grid";
import { RADIUS } from "./radius";
import { SHADOWS } from "./shadows";
import { SPACING_PX } from "./spacing";

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
  color: ${COLORS.BLACK};
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
  background-color: ${COLORS.GRAY_50};
}
div {
  overflow-wrap: anywhere;
}
p {
  margin-bottom: ${SPACING_PX.FOUR};
}
a{
  color: ${COLORS.BLUE_500};
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: ${COLORS.BLUE_500_HOVER};
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

export const UIProvider: FunctionComponent<UIProviderTypes> = ({ children }) => (
  <ThemeProvider
    theme={{
      BREAKPOINTS,
      FONTS,
      FONT_SIZES,
      FONT_WEIGHTS,
      GRID,
      COLORS,
      RADIUS,
      SHADOWS,
      SPACING_PX,
    }}
  >
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

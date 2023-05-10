import "styled-components";
import { ThemeLightType } from "./theme/theme-light";
import { ThemeDarkType } from "./theme/theme-dark";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeLightType, ThemeDarkType {}
}

import "styled-components";
import { ThemeLightType, ThemeDarkType } from "@cleaved/ui";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeLightType, ThemeDarkType {}
}

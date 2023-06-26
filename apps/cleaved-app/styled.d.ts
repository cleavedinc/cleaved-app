import "styled-components";
import { ThemeLightType, ThemeDarkType } from "@cleaved/ui";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeLightType, ThemeDarkType {}
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

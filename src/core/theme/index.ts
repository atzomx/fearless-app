import { Theme } from './theme';

export { default as LightTheme } from './base.theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

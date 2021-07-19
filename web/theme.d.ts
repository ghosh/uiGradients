import 'styled-components'

declare module 'styled-components' {
  export interface ThemeInterface {
    heights: {
      header: string,
      actionbar: string,
      footer: string,
      display: string
    }
  }
}
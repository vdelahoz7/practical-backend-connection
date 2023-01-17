import { ThemeOptions as DefaultThemeOptions } from '@mui/material'

declare module '@mui/material' {
    export interface Theme {
        status: {
            danger: string
        }
    }
    // allow configuration using `createTheme`
    export interface ThemeOptions extends DefaultThemeOptions {
        status?: {
            danger?: string
        }
        palette?: {
            white?: {
                main?: string
            }
        }
    }
}

declare global {
    namespace Cypress {
        interface Chainable {
            getBySel(
                dataTestAttribute: string,
                args?: never
            ): Chainable<JQuery<HTMLElement>>
            getBySelLike(
                dataTestPrefixAttribute: string,
                args?: never
            ): Chainable<JQuery<HTMLElement>>
        }
    }
}

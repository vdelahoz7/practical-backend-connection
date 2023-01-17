export type genericThemeType = {
    [key: string]: number
}

export interface mediaSizes extends genericThemeType {
    mobile: number
    tablet: number
    desktop: number
    largeDesktop: number
    wrap: number
    giantDesktop: number
    hugeDesktop: number
}

export type Colors = {
    primary: string
    secondaryText: string
    secondary: string
    grey: string
    white: string
    primaryText: string
    background: string
    greyBlack: string
    black: string
}

const sizes = {
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 18,
    xxlarge: 20,
    xxxlarge: 24,
}

export const fontSizes = Object.values(sizes) as never

Object.keys(sizes).map((key, index) => {
    fontSizes[key] = fontSizes[index]
    return {
        [key]: index,
    }
})

const sizes = {
    small: 12,
    xsmall: 14,
    xxsmall: 15,
    xxxsmall: 18,
    medium: 20,
    xmedium: 22,
    xxmedium: 24,
    xxxmedium: 26,
    large: 28,
    xlarge: 30,
    xxlarge: 32,
    xxxlarge: 34,
    titlle: 50,
}

export const spaces = Object.values(sizes) as never

Object.keys(sizes).map((key, index) => {
    spaces[key] = spaces[index]
    return {
        [key]: index,
    }
})

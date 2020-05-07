const communStyles = {
    font: "'roboto', 'Baloo Tamma 2', cursive",
    radius: {

    },
    shadow: {

    }
}

export const lightTheme = {
    placeHolder: {
        background: 'rgba(255, 255, 255)',
        foreground: 'rgba(248, 248, 248)'
    },
    colors: {
        light: 'rgb(243, 251, 255)',
        dark: 'rgb(33, 43, 91)',
        halfLight: 'rgb(243, 251, 255, 0.5)',
        halfDark: 'rgb(33, 43, 91, 0.5)',
        white: 'rgb(255, 255, 255)',
        black: 'rgb(0, 0, 0)',
        gray_1: 'rgb(217, 216, 220)',
        gray_2: 'rgb(154, 161, 181)',
    },
    ...communStyles
}

export const darkTheme = {
    placeHolder: {
        background: 'rgba(252, 252, 252, 0.1)',
        foreground: 'rgba(248, 248, 248, 0.2)'
    },
    colors: {
        light: 'rgb(33, 43, 91)',
        dark: 'rgb(243, 251, 255)',
        halfLight: 'rgb(33, 43, 91, 0.5)',
        halfDark: 'rgb(243, 251, 255, 0.5)',
        white: 'rgb(0, 0, 0)',
        black: 'rgb(255, 255, 255)',
        gray_1: 'rgb(154, 161, 181)',
        gray_2: 'rgb(217, 216, 220)',
    },
    ...communStyles
}
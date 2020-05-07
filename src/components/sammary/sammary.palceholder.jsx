import React from 'react'
import ContentLoader from 'react-content-loader'

import { ThemeContext } from 'styled-components'

const SammaryLoader = () => {
    const theme = React.useContext(ThemeContext)
    return (
        <ContentLoader 
            width="140" 
            height="170" 
            backgroundColor={theme.placeHolder.background}
            foregroundColor={theme.placeHolder.foreground}
        >
            <rect x="0" y="0" rx="10" ry="10" width="60" height="40" />
            <rect x="0" y="45" rx="10" ry="10" width="140" height="120" />
        </ContentLoader>
    )
}

export default SammaryLoader
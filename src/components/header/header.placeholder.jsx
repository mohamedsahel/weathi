import React from 'react'
import ContentLoader from 'react-content-loader'

import { ThemeContext } from 'styled-components'

const CurrentLocationLoader = () => {
    const theme = React.useContext(ThemeContext)
    return (
        <ContentLoader 
            width="160" 
            height="12" 
            backgroundColor={theme.placeHolder.background}
            foregroundColor={theme.placeHolder.foreground}
        >
            <rect x="0" y="0" rx="10" ry="10" width="60" height="12" />
            <rect x="65" y="0" rx="10" ry="10" width="95" height="12" />
        </ContentLoader>
    )
}

export default CurrentLocationLoader
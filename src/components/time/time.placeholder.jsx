import React from 'react'
import ContentLoader from 'react-content-loader'

import { ThemeContext } from 'styled-components'

const TimeLoader = () => {
    const theme = React.useContext(ThemeContext)
    return (
        <ContentLoader 
            width="100" 
            height="45"
            backgroundColor={theme.placeHolder.background}
            foregroundColor={theme.placeHolder.foreground}
        >
            <rect x="0" y="0" rx="10" ry="10" width="100" height="30" />
            <rect x="20" y="35" rx="10" ry="10" width="80" height="10" />
        </ContentLoader>
    )
}

export default TimeLoader
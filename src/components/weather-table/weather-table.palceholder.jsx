import React from 'react'
import ContentLoader from 'react-content-loader'

import { ThemeContext } from 'styled-components'

const TableLoader = () => {
    const theme = React.useContext(ThemeContext)
    return (
        <ContentLoader 
            width="100%" 
            height="160" 
            backgroundColor={theme.placeHolder.background}
            foregroundColor={theme.placeHolder.foreground}
        >
            <rect x="0" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="80" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="160" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="240" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="320" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="400" y="0" rx="20" ry="20" width="70" height="160" />
            <rect x="480" y="0" rx="20" ry="20" width="70" height="160" />
        </ContentLoader>
    )
}

export default TableLoader
import React from 'react'

export default function useMediaQuery(mediaQuery) {
    const [isVerified, setIsVerified] = React.useState(!!window.matchMedia(mediaQuery).matches)

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery)
        const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches)

        mediaQueryList.addListener(documentChangeHandler)

        documentChangeHandler()
        return () => {
            mediaQueryList.removeListener(documentChangeHandler)
        }
    }, [mediaQuery])

    return isVerified
}
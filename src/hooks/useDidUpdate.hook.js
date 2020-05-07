import React from 'react'

export default function useDidUpdate(updateCount = 1) {
    const updateRef = React.useRef(0)
    const didUpdate = updateRef.current === updateCount

    React.useEffect(() => {
        if(updateRef.current !== updateCount) updateRef.current+= 1
    })

    return didUpdate
}


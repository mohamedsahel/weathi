import React from 'react'

export default function useElementSize(ref) {
    const [size, setSize] = React.useState({})

    // ref.current.getBoundingClientRect().toJSON()
    
    React.useLayoutEffect(() => {
        if(!ref) return
        
        const handleResize = () => {
            setSize({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [ref])

    return size
}


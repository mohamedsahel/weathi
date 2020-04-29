import React from 'react'

export default function useElementSize(element) {
    const [size, setSize] = React.useState({})

    // ref.current.getBoundingClientRect().toJSON()
    
    React.useLayoutEffect(() => {
        if(!element) return
        
        let el;
        if(typeof element === 'string') {
            el = document.querySelector(element)
        } else if (typeof element === 'object') {
            el = element.current
        }

        const handleResize = () => {
            setSize({
                width: el.offsetWidth,
                height: el.offsetHeight
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
        
    }, [element])

    return size
}


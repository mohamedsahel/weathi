import React from 'react'

import { useElementSize } from '@hooks'

import * as S from './search-bar.styles'

const SearchBar = () => {
    const { width } = useElementSize('#weather-section')
    const isLarg = width > 600
    const [isExpanded, setExpanded] = React.useState(isLarg)
    const inputRef = React.useRef()

    const handleIconClick = () => {
        if(isLarg) return 
        setExpanded(!isExpanded)
        inputRef.current.focus()
    }

    const handleInputBlur = () => {
        if(inputRef.current.value !== '') return
        else setExpanded(false)
    }

    return (
        <S.Container>
            <S._SearchIcon 
            onClick={handleIconClick}
            />
            <S.Input
            ref={inputRef}
            type='text'
            placeholder='Search new location'
            isExpanded={isLarg || isExpanded}
            onBlur={handleInputBlur}
            />
        </S.Container>
    )
}

export default SearchBar
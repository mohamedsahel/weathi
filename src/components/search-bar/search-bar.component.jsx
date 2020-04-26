import React from 'react'

import { useMediaQuery } from '@hooks'

import * as S from './search-bar.styles'

const SearchBar = () => {
    const isLarg = useMediaQuery('(min-width: 600px)') 
    const [isExpanded, setExpanded] = React.useState(isLarg)
    const inputRef = React.useRef()

    const handleIconClick = () => {
        if(isLarg) return 
        else {
            if(!isExpanded) inputRef.current.focus()
            if(!isExpanded) inputRef.current.blur()
            setExpanded(!isExpanded)
            
        }
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
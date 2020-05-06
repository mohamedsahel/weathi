import React from 'react'

import * as S from './search-suggestions.styles'


const Suggestion = ({ suggestion, ...otherProps }) => {
    return (
        <S.Row {...otherProps} >
            {
                suggestion.description
            }
        </S.Row>
    )
}


const SearchSuggestions = ({ suggestions, onSuggestionClick, ...otherProps }) => {
    return (
        <S.Container {...otherProps}>
        {
            suggestions.map((suggestion, index) => <Suggestion 
            suggestion={suggestion} 
            key={index} 
            onClick={() => onSuggestionClick(suggestion.place_id, suggestion.description)}
            />)
        }
        </S.Container>
    )
}

export default SearchSuggestions
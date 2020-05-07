import React from 'react'

import Map from '@providers/map/map.context'
import WeatherContext from '@providers/weather/weather.context'
import { useElementSize } from '@hooks'

import * as S from './search-bar.styles'

const SearchBar = () => {
    const { width } = useElementSize('#weather-section')
    const isLarg = width > 600
    const [isExpanded, setExpanded] = React.useState(isLarg)

    const map = React.useContext(Map)
    const inputRef = React.useRef()
    const service = React.useRef(null)
    const serviceDetails = React.useRef(null)
    const sessionToken = React.useRef(null)
    const [suggestions, setSuggestions] = React.useState([])

    const [state, fetchAsync] = React.useContext(WeatherContext)


    const handleIconClick = () => {
        if(isLarg) return 
        setExpanded(!isExpanded)
        inputRef.current.focus()
    }

    const handleInputBlur = () => {
        if(inputRef.current.value !== '') return
        else setExpanded(false)
    }

    const handleSuggestionClick = (placeId) => {
        let request = {
            placeId: placeId,
            fields: ['name', 'geometry', 'formatted_address']
        }

        serviceDetails.current.getDetails(request, (place, status) => {
            sessionToken.current = new window.google.maps.places.AutocompleteSessionToken()
            inputRef.current.value = ''
            setExpanded(false)
            setSuggestions([])
            fetchAsync(place)
        })
    }


    React.useEffect(() => {
        if(map) {
            service.current = new window.google.maps.places.AutocompleteService()
            serviceDetails.current = new window.google.maps.places.PlacesService(map)

            sessionToken.current = new window.google.maps.places.AutocompleteSessionToken()


            const handleSuggestions = (suggestions, status) => {
                if(status != window.google.maps.places.PlacesServiceStatus.OK) {
                    setSuggestions([])
                    return 
                }
                setSuggestions(suggestions)
                
            }
            
            inputRef.current.addEventListener('input', e => {
                const value = e.target.value
                if(value !== '') {
                    service.current.getPlacePredictions({
                        input: e.target.value,
                        types: ['(cities)'],
                        sessionToken: sessionToken.current
                    }, handleSuggestions)
                } else {
                    setSuggestions([])
                }
            })


        }
    }, [map])

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
            {
                !!suggestions.length && <S._SearchSuggestions suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
            }
            
        </S.Container>
    )
}

export default SearchBar
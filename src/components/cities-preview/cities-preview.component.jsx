import React from 'react'
import FadeIn from 'react-fade-in'

import { CityCard } from '@components'

import  * as S from './cities-preview.styles'

const CITIES = [
    {
        name: 'Paris',
        imageUrl: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Giza',
        imageUrl: 'https://images.pexels.com/photos/91409/pexels-photo-91409.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'Mumbai',
        imageUrl: 'https://images.pexels.com/photos/3587030/pexels-photo-3587030.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'New York',
        imageUrl: 'https://images.pexels.com/photos/2404843/pexels-photo-2404843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: 'London',
        imageUrl: 'https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
]

const CitiesPreview = ({cities=CITIES, ...otherProps}) => {
    return (
        <S.Container {...otherProps}>
            <FadeIn className='fadeIn' >
                {
                    CITIES.map((city, index) => <CityCard  city={city} key={index} />)
                }
            </FadeIn>
        </S.Container>
    )

}

export default CitiesPreview
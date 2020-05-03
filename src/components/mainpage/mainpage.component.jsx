import React from 'react'

import { MapToggler, ModeToggler } from '@components'

import * as S from './mainpage.styles'

const MainPage = () => {
    const [mapInTop, setMapInTop] = React.useState(true)
    return (
        <S.Container>
            <S._MapSection 
            intop={mapInTop}
            />
            <S._WeatherSection />

            <S.TogglersContainer>
                <ModeToggler />
                <MapToggler 
                 onClick={() => setMapInTop(s => !s)}
                 isDefault={!mapInTop}
                />
               
            </S.TogglersContainer>
        </S.Container>
    )
}

export default MainPage
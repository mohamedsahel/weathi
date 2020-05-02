import React from 'react'

import { MapToggler, ModeToggler } from '@components'

import * as S from './mainpage.styles'

const MainPage = () => {
    const [mapInTop, setMapInTop] = React.useState(false)
    return (
        <S.Container>
            <S._MapSection 
            top={mapInTop}
            />
            <S._WeatherSection />

            <MapToggler 
            onClick={() => setMapInTop(s => !s)}
            isDefault={!mapInTop}
            />
            <ModeToggler />
        </S.Container>
    )
}

export default MainPage
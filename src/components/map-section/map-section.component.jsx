import React from 'react'


import { Map, MapPopupContainer } from '@components'

import * as S from './map-section.styles'

const MapSection = (props) => {
    return (
    <S.Container  {...props} >
        <Map />
        <MapPopupContainer anchorColor='red' >
            hi there
        </MapPopupContainer>
    </S.Container>
)
}

export default MapSection
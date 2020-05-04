import React from 'react'


import { Map, MapPopup } from '@components'

import * as S from './map-section.styles'

const MapSection = (props) => {
    return (
    <S.Container  {...props} >
        <Map />
        <MapPopup lat={20} lng={20} />
        <MapPopup lat={0} lng={0} />
    </S.Container>
)
}

export default MapSection
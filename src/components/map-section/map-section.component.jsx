import React from 'react'


import { Map, MapPopup } from '@components'

import * as S from './map-section.styles'

const MapSection = (props) => {
    return (
    <S.Container  {...props} >
        <Map />
        <MapPopup lat={0} lng={0} >hellow world</MapPopup>
        <MapPopup lat={20} lng={-20} 
        onClick={() => console.log('hi')}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quidem voluptatum beatae vitae est, assumenda nemo porro iste exercitationem minima doloremque odio omnis minus velit delectus consectetur pariatur dolorum quos?
        </MapPopup>
    </S.Container>
)
}

export default MapSection
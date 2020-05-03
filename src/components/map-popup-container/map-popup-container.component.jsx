import React from 'react'

import MapContext from '@providers/map/map.context'
import { createPopupClass } from '@global/utils/map.utils'

import * as S from './map-popup-container.styles'

const MapPopupContainer = ({children, lat, lng , ...otherProps}) => {
    const map = React.useContext(MapContext)
    const popupRef = React.useRef()

    React.useEffect(() => {
        if(map) {
            const Popup = createPopupClass()
            const popup = new Popup({
                position: new window.google.maps.LatLng(lat, lng, 0),
                popupDiv: popupRef.current
            })

            popup.setMap(map)
          }
    }, [map, popupRef])

    
    return (
        <S.MapPopupContainer ref={popupRef}  {...otherProps} >
            {children}
        </S.MapPopupContainer>
    )
}

export default MapPopupContainer
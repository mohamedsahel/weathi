import React from 'react'

import MapContext from '@providers/map/map.context'
import { createPopupClass } from '@global/utils/map'

import * as S from './map-popup.styles'

const MapPopup = ({children, lat, lng, ...otherProps}) => {
    const map = React.useContext(MapContext)
    const contentRef = React.useRef()
    const containerRef = React.useRef()

    React.useEffect(() => {

        if(map) {
            const Popup = createPopupClass()
            const popup = new Popup({
                position: new window.google.maps.LatLng(lat, lng, 0),
                content: contentRef.current,
                containerDiv: containerRef.current
            })

            popup.setMap(map)
          }
    })

    
    return (
        <S.Popup_container ref={containerRef}>
            <S.Popup_bubble_anchor>
                <S.Popup_bubble ref={contentRef} {...otherProps} >
                    {children}
                </S.Popup_bubble>
            </S.Popup_bubble_anchor>
        </S.Popup_container>
    )
}

export default MapPopup
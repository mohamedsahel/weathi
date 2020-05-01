import React from 'react'
import MapContext from '../../providers/map/map.context'

const Marker = ({ lat, lng }) => {
    const map = React.useContext(MapContext)

    React.useEffect(() => {
        if(map) {
            const marker = new window.google.maps.Marker({
                position: { lat: +lat, lng: +lng },
                map: map
            })
        }
    })


    return null
}

export default Marker
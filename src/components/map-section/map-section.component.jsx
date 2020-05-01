import React from 'react'

import { Marker } from '@components'

const MapSection = (props) => {
    return (
    <div  id='map' {...props} >
        {/* <Marker lat='-34.397' lng='120' />
        <Marker lat='-34.397' lng='180' /> */}
        <Marker lat='30' lng='-10' />
    </div>
)
}

export default MapSection
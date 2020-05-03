import React from 'react'
import MapContext from './map.context'

const MapProvider = ({ id, children }) => {
    
    const API_KEY = 'AIzaSyAbb5ofmuzQCGnuAuDSRJYdyeqhRB6EDKU'

    const options = {
        center: {lat: 0, lng: 0},
        zoom: 2,
        disableDefaultUI: true,
        gestureHandling: "greedy"
      }

    let [map, setMap] = React.useState(null)

    const onScriptLoad = () => {
        const mapId = document.getElementById(id)
        const gmap = new window.google.maps.Map(mapId, options)
        setMap(gmap)
    }

    React.useEffect(() => {

        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://maps.google.com/maps/api/js?key=${API_KEY}`
        script.defer = true
        script.async = true
        window.document.body.appendChild(script)

        script.addEventListener('load', e => {
            onScriptLoad()
        })

    }, [])

    return (
        <MapContext.Provider value={map} >
            {children}
        </MapContext.Provider>
    )
}

export default MapProvider
import styled from 'styled-components'

import { MapSection, WeatherSection } from '@components'

export const _WeatherSection = styled(WeatherSection)`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

export const _MapSection = styled(MapSection)`
    height: 100vh;
    width: 100%;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;
    z-index: ${p => p.top ? 3 : -1} ;
`

export const Container = styled.div`
    height: 100vh;
    position: relative;

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row-reverse;

        ${_MapSection}, ${_WeatherSection} {
            width: 50%;
        }

        ${_MapSection} {
            z-index: 0;
        }
    }
`
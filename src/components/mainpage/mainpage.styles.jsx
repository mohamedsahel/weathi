import styled from 'styled-components'

import { MapSection, WeatherSection } from '@components'

export const _WeatherSection = styled(WeatherSection)``

export const _MapSection = styled(MapSection)`
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

export const TogglersContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 7.2rem;
    right: 1.6rem;
    z-index: 4;

    > *:first-child{
        margin-bottom: 1.6rem;
    }
`
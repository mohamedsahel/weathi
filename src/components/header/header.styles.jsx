import styled from 'styled-components'

import { LocationMarkerIcon } from '@icons'

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding-bottom: 4rem;
    padding-top: 1.6rem;
`

export const LocationContainer = styled.div`
    display: inline-flex;
    align-items: center;
    margin-left: 6rem;
`

export const _LocationMarker = styled(LocationMarkerIcon)`
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 1.2rem;
    fill: ${p => p.theme.colors.dark};
`

export const LocationTitle = styled.h4`
    font-size: 1.7rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
` 
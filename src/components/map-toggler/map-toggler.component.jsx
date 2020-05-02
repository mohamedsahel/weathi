import React from 'react'

import { useMediaQuery } from '@hooks'

import * as S from './map-toggler.styles'

const MapToggler = props => {
    const isLarg = useMediaQuery('(min-width: 800px)')
    return isLarg ? null : <S._Toggler 
          {...props}
          icon1='MapIcon'
          icon2='CloseIcon'
          />

}


export default MapToggler
import React from 'react'

import { useMediaQuery } from '@hooks'

import { Toggler } from '@components'

const MapToggler = props => {
    const isLarg = useMediaQuery('(min-width: 800px)')
    return isLarg ? null : <Toggler 
          {...props}
          icon1='MapIcon'
          icon2='CloseIcon'
          />

}


export default MapToggler
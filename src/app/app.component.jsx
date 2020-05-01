import React from 'react'
import { Theme, MainPage } from '@components'

import ModeProvider from '../providers/mode/mode.provider'
import MapProvider from '../providers/map/map.provider'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <ModeProvider>
        <Theme>
          <MapProvider id='map' >
            <GlobalStyles />
            <MainPage />
          </MapProvider>
        </Theme>
    </ModeProvider>
  )
}

export default App

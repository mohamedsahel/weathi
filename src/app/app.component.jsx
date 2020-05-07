import React from 'react'
import { Theme, MainPage } from '@components'

import ModeProvider from '@providers/mode/mode.provider'
import MapProvider from '@providers/map/map.provider'
import WeatherProvider from '@providers/weather/weather.provider'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <ModeProvider>
        <Theme>
          <WeatherProvider>
            <MapProvider id='map' >
              <GlobalStyles />
              <MainPage />
            </MapProvider>
          </WeatherProvider>
        </Theme>
    </ModeProvider>
  )
}

export default App

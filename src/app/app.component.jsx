import React from 'react'
import { Theme, WeatherSection } from '@components'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <Theme>
      <GlobalStyles />
      <div>
        <WeatherSection />
      </div>
    </Theme>

  )
}

export default App

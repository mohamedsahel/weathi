import React from 'react'
import { Theme, MainPage } from '@components'

import ModeProvider from '../providers/mode/mode.provider'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <ModeProvider>
        <Theme>
          <GlobalStyles />
          <MainPage />
        </Theme>
    </ModeProvider>
  )
}

export default App

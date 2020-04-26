import React from 'react'
import { Theme, Header } from '@components'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <Theme>
      <GlobalStyles />
      <div className="App">
        <Header />
      </div>
    </Theme>

  )
}

export default App

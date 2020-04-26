import React from 'react'
import { Theme, SearchBar } from '@components'

import GlobalStyles from '../global/styles'
// import * as S from './app.styles'

function App() {

  return (
    <Theme>
      <GlobalStyles />
      <div className="App">
        <SearchBar />
      </div>
    </Theme>

  )
}

export default App

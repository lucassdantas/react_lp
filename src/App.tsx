import { ThemeProvider } from 'styled-components'

import { Home } from './templates/Home'
import { theme } from './assets/theme'
import { GlobalStyles } from './assets/GlobalStyles'
import './App.css'
import './assets/GlobalStyles'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Home/>
      </ThemeProvider>
    </>
  )
}

export default App

import React from 'react'
import { ThemeProvider } from './themeContext'
import Component from './component'

//similar to redux
//redux eff for large app and context api for smaller app

const UseContext = () => {
  return (
    <div>
      <ThemeProvider> {/*wraps all logic for handling states,updating state and
                       pushing out different values to all children*/ }
        <Component/>
      </ThemeProvider>
    </div>
  )
}

export default UseContext

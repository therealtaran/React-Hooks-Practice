import React from 'react'
import { useTheme,useThemeUpdate } from './themeContext'

const Component = () => {
    const darkTheme=useTheme()
    const toggleTheme=useThemeUpdate()
    const themeStyles={
        backgroundColor:darkTheme ? '#333':'#CCC',
        color:darkTheme ? '#CCC':'#333',
        padding:'2 rem',
        margin: '2 rem'
    }
  return (
    <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div style={themeStyles}>Component</div>
    </div>
  )
}

export default Component

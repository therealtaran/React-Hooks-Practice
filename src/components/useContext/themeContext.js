import React,{useContext,useState} from 'react'

const ThemeContext=React.createContext()
const ThemeUpdateContext=React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}
//abouve useTheme and useThemeUpdate are two custom hooks which gives easy access to these different values
//these values are theme value and themeupdate value

export function ThemeProvider({children}){
    const [darkTheme,setDarkTheme]=useState(true) //creating state

    function toggleTheme(){
        setDarkTheme(prevDark=>!prevDark) //updating state
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children} {/*persisting both values of darkTheme and toggleTheme to children*/}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}


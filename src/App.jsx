import {  Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import Hello from './components/Hello/Hello'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'
import { useState } from 'react'



const App = () => {
  const themeInStorage = localStorage.getItem('theme')
  const themeActive = themeInStorage === 'dark' ? true : false
  const [isDark, setIsDark] = useState(themeActive)

function designTheme () {
  const mode = isDark ? 'dark' : 'light'
  return(
    mode === 'dark'?
    {palette:{
        mode: 'dark',
        background:{
          default:'#202124'
      }
    },
    components:{
      MuiCssBaseline: {
        styleOverrides: {
          '#navbar':{
            backgroundColor:'#202124'
          },
            body: {
              color: '#e4edf1',
            },
            a:{
              color: '#e4edf1'
            },
            input:{
              color: '#e4edf1',
              caretColor: '#f7f7f7'
            },
            textarea:{
              color: '#e4edf1',
              caretColor: '#f7f7f7'
            }
        }}
    },
    breakpoints:{
      values:{
        lg: 1024
      },
      MuiCssBaseline:{
        styleOverrides:{
          h6:{
            color: '#e4edf1',
          }
        }
      }
    }
    }
    :
      {palette:{
        mode: 'light',
        background:{
          default: '#f7f7f7'
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            '#navbar':{
              backgroundColor:'#f7f7f7'
            },
              body: {
                color: '#333333',
                caretColor: '#000'
              },
            svg:{
              color: '#333333'
            },
            span:{
              color: '#e4edf1'
            },
            h6:{
              color:'#000',
              fontWeight:'bold'
            },
            a:{
              color:'#000'
            },
            '.nav_items':{
              backgroundColor: '#f7f7f7'
            },
            input:{
              color: '#333333',
              caretColor: '#000'
            },
            textarea:{
              caretColor: '#000'
            }
          },
        },
        
  }}
  )
}

  const theme = createTheme(designTheme())

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box>
      <NavBar setIsDark={setIsDark} isDark={isDark}/>
      <Hello/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      </Box>
    </ThemeProvider>
  
  )
}

export default App
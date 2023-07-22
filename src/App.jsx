import {  Box, Paper, ThemeProvider, createTheme } from '@mui/material'
import Hello from './components/Hello/Hello'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'
import ContactMe from './components/ContactMe/ContactMe'



const App = () => {
  return (
    <Box >
      <NavBar/>
      <Hello/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </Box>
  
  )
}

export default App
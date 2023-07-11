import { Box } from '@mui/joy'
import Hello from './components/Hello/Hello'
import NavBar from './components/NavBar/NavBar'
import AboutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'



const App = () => {
  return (
    <Box >
      <NavBar/>
      <Hello/>
      <AboutMe/>
      <Projects/>
    </Box>
  
  )
}

export default App
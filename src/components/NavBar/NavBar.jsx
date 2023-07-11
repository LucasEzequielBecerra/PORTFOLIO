import { Box, Typography } from "@mui/joy"
import { useState } from "react"
import './NavBar.css'

const NavBar = () => {
    let [isOpen, setIsOpen] = useState(false);

  return (
    <header id="navbar">
    <Box sx={{maxHeight:'4rem'}} className="navbar">
    <Box sx={{display:'flex', alignItems:'center'}} className="logo-items-container">
    <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:30}}>{ "{ lucas }" }</Typography>
    <ul  className={`nav_items ${isOpen && "open"}`}>
      <a href="#about">
        About me
      </a>
      <a href="#projects">
Projects
      </a>
      <a href="#contact">
        Contact me
      </a>
    </ul>
    <div
      className={`nav_toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div> 
    </Box>
    <Box className='container-dark-mode'>DARKMODE</Box>
  </Box>
    </header>
    )
}

export default NavBar
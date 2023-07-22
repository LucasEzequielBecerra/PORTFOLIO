import { Box, Typography, } from "@mui/material"
import { useState } from "react"
import { Link } from "react-scroll"
import './NavBar.css'

const NavBar = () => {
    let [isOpen, setIsOpen] = useState(false);



  return (
    <header id="navbar">
    <Box sx={{maxHeight:'4rem'}} className="navbar">
    <Box sx={{display:'flex', alignItems:'center'}} className="logo-items-container">
    <Typography sx={{fontFamily:'Poppins, sans-serif', fontWeight:700, fontSize:30}}>{ "{ lucas }" }</Typography>
    <ul  className={`nav_items ${isOpen && "open"}`}>
      <Link onClick={()=> setIsOpen(false)} to="about" smooth={true} duration={500}>
        About me
      </Link>
      <Link onClick={()=> setIsOpen(false)} to="projects" smooth={true} duration={500}>
Projects
      </Link>
      <Link onClick={()=> setIsOpen(false)} to="contact" smooth={true} duration={500}>
        Contact me
      </Link>
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
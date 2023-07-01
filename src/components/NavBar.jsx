import { Box, Typography } from "@mui/joy"
import { useState } from "react"
import './NavBar.css'

const NavBar = () => {
    let [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Box sx={{maxHeight:'4rem'}} className="navbar">
    <Box sx={{display:'flex', alignItems:'center'}} className="logo-items-container">
    <Typography >LUCAS</Typography>
    <ul  className={`nav_items ${isOpen && "open"}`}>
      <li>
        About me
      </li>
      <li>
Projects
      </li>
      <li>
        Contact me
      </li>
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
    </>
    )
}

export default NavBar
import { Box, Button, Typography } from '@mui/joy';
import Typewriter from 'typewriter-effect'
import { keyframes } from '@emotion/react';

const gradient = keyframes`
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}
`
new Typewriter('#typewriter', {
  strings: ['Hi', 'World'],
  autoStart: true,
});

const Hello = ( ) => {
  return (
    <Box id='hello'>
    <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', marginTop:'5rem'}}>
      <Typography level='h4'> Hi 👋🏻, I am</Typography>
      <Typography level='h1' sx={{fontWeight:'700', fontSize:'8rem', lineHeight:"7rem", background:"-webkit-linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)",backgroundSize:"250%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:`${gradient} 5s ease infinite`, display:'flex', flexDirection:'column', alignItems:'center'}}>Lucas <span>Ramos.</span></Typography>
      <Typography level='h3' sx={{marginTop:'2rem'}}>Fronted Developer.</Typography>
    </Box>
    <Box sx={{display:'flex', justifyContent:'center', gap:'1rem', marginTop:'1rem'}}>
    <Button size='lg' sx={{ backgroundColor:'#87ceeb', color:'#214949', ":hover":{backgroundColor:'#e4edf1 '}}}  >Download cv</Button>
    <Button size='lg' sx={{ backgroundColor:'#87ceeb', color:'#214949', ":hover":{backgroundColor:'#e4edf1 '} }} >Contact me</Button>
    </Box>
    </Box>
  )
}

export default Hello
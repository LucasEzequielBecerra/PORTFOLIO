import { Box, Button, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect'
import { keyframes } from '@emotion/react';
import './Hello.css'
import { Link } from 'react-scroll';

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
    <section id='hello'> 
    <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', marginTop:'5rem'}}>
      <h2> Hi 👋🏻, I am</h2>
      <Typography className='title-principal' level='h1' sx={{fontWeight:'700', fontSize:'8rem', lineHeight:"7rem", background:"-webkit-linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5, #23d5ab)",backgroundSize:"250%", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", animation:`${gradient} 5s ease infinite`, display:'flex', flexDirection:'column', alignItems:'center', fontFamily:'inherit'}}>Lucas <span>Ramos.</span></Typography>
      <h2 className='sub-head'>Fronted Developer.</h2>
    </Box>
    <div className='button-box'>
    <Button  sx={{ backgroundColor:'#0c4489', color:'#e4edf1', ":hover":{scale:'1.1',  backgroundColor:'#0c4489'}, fontSize:'1.3rem', transition:'0.3s'}}  > <a href="">Download cv</a></Button>
    <Button sx={{ backgroundColor:'#0c4489', color:'#e4edf1', ":hover":{scale:'1.1', backgroundColor:'#0c4489'},fontSize:'1.3rem', transition:'0.3s' }} ><Link  to="about" smooth={true} duration={500}>Contact me </Link> </Button>
    </div>
    <ul className='social-buttons-list'>
        <li className='item-social'>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
          </a>
          </li>
        <li className='item-social'>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><line x1="8" y1="11" x2="8" y2="16"></line><line x1="8" y1="8" x2="8" y2="8.01"></line><line x1="12" y1="16" x2="12" y2="11"></line><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
          </a>
          </li>
        <li className='item-social'>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
          </a>
          </li>
        <div className='social-button-div'></div>
      </ul>
    </section>
  )
}

export default Hello
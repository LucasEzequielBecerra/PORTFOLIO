import { Box } from "@mui/material"
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section id="about">
        <Box className='info-box'>
        <h2 className="about-title">About me</h2>
            <p>Frontend developer with knowledge in
                Backend.
                My goal is to apply my skills
                programming in a professional environment,
                learning, improving and contributing all my
                experience to optimize the results of the
                projects you undertake.<svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="3" y1="12" x2="6" y2="12"></line><line x1="12" y1="3" x2="12" y2="6"></line><line x1="7.8" y1="7.8" x2="5.6" y2="5.6"></line><line x1="16.2" y1="7.8" x2="18.4" y2="5.6"></line><line x1="7.8" y1="16.2" x2="5.6" y2="18.4"></line><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path></svg></p> 
                <p>
                To be able to make myself
                workspace a productive environment with
                my teamwork skills and
                responsibility. <svg xmlns="http://www.w3.org/2000/svg"width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="3" y1="12" x2="6" y2="12"></line><line x1="12" y1="3" x2="12" y2="6"></line><line x1="7.8" y1="7.8" x2="5.6" y2="5.6"></line><line x1="16.2" y1="7.8" x2="18.4" y2="5.6"></line><line x1="7.8" y1="16.2" x2="5.6" y2="18.4"></line><path d="M12 12l9 3l-4 2l-2 4l-3 -9"></path></svg></p>
        </Box>
        <Box >
        <div>
                <h2 className="skills-title" >Skills</h2>
        </div>
        <div className='skills-box'>
            <div className="item-skill">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"stroke="currentColor" aria-hidden="true" className="frontend" ><path  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"></path></svg>
            </span>
            <p className="skills-text">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>ReactJS</span>
            </p>
                </div> 
            <div className="item-skill">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="frontend" ><path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"></path></svg>
            </span>
            <p className="skills-text">
                <span>NodeJS</span>
                <span>Express</span>
                <span>MongoDB</span>
            </p></div>
            <div className="item-skill">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" ><path d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"></path><path d="M4.867 19.125h.008v.008h-.008v-.008z"></path></svg>
            </span>
            <p className="skills-text">
                <span>Git</span>
                <span>Github</span>
                <span>Postman</span>
            </p>
            </div>
        </div>
        </Box>
    </section>
  )
}

export default AboutMe
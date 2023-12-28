import { Box } from '@mui/material'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <Box className='principal-projects-box'>
        <h2 className='title-projects-section'>Projects</h2>
        <article className='single-project'>
          <img className='project-image' src="TheWayCamp-project.png" alt="The Way Camp Background Image" />
          <div className='info-column'>
            <h3 className='title-single-project' >The Way Camp</h3>
            <h6 className='project-description'>This project is a static landing page created for a camp. It has implemented figma designs and a composite structure. The CSS is made with tailwind</h6>
            <ul className='skills-applied'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
            </ul>
            <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielRamos/The-Way-Camp" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://lucasezequielbecerra.github.io/FaMusic/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </div>
        </article>
        <article className='single-project'>
          <img className='project-image' src="Art&Air-project-image.jpg" alt="ArtAir Background Image" />
          <div className='info-column'>
            <h3 className='title-single-project' >Art&Air</h3>
            <h6 className='project-description'>My first project with react. Apply the technologies learned, such as context, router-dom, and the firebase implementation. The project is an e-commerce of art articles. It has cart and purchase order data. All the information, from the articles to the buyer data, is found in the firebase database</h6>
            <ul className='skills-applied'>
              <li>HTML</li>
              <li>CSS</li>
              <li>ReactJs</li>
              <li>Vite</li>
              <li>Bootstrap</li>
              <li>Firebase / Firestore</li>
            </ul>
            <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielBecerra/ArtAir" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://art-air.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </div>
        </article>
        <article className='single-project'>
          <img className='project-image' src="E-Commerce-API-project.png" alt="E-Commerce-API Background Image" />
          <div className='info-column'>
            <h3 className='title-single-project' >E-Commerce-API</h3>
            <h6 className='project-description'>This is my final backend project to finish my degree as a full stack programmer in CoderHouse. This project is a e-commerce API for add and manage users and products</h6>
            <ul className='skills-applied'>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Passport</li>
              <li>Swagger</li>
              <li>Express-Session</li>
            </ul>
            <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielBecerra/Amazing-Movie-Searcher" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://movie-searcher-app-two.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </div>
        </article>
      </Box>
      <Box >
        <h2>Other Project</h2>
        <div className='other-projects-box'>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>FaMusic</h4>
            <p> Famusic is a mockup page of a musical instrument e-commerce. I was inspired by the Fender page, taking some of their structures but putting my imprint on them.</p>
            <ul className='skills-applied-min'>
              <li>Html</li>
              <li>Css</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
            <div><a target='_blank' href="https://github.com/LucasEzequielRamos/FaMusic" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://fa-music.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>Amazing-Movie-Searcher</h4>
            <p> This project was taken from a technical test for a junior or front-end trainee using react, handling requests to the moviedb API. Implementing the use of hooks and search and filtering logic</p>
            <ul className='skills-applied-min'>
              <li>Html</li>
              <li>Css</li>
              <li>ReactJs</li>
            </ul>
            <div><a target='_blank' href="https://github.com/LucasEzequielBecerra/Amazing-Movie-Searcher" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://movie-searcher-app-two.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>FaMusic</h4>
            <p> Famusic is a mockup page of a musical instrument e-commerce. I was inspired by the Fender page, taking some of their structures but putting my imprint on them.</p>
            <ul className='skills-applied-min'>
              <li>Html</li>
              <li>Css</li>
              <li>Sass</li>
              <li>Bootstrap</li>
            </ul>
            <div><a target='_blank' href="https://github.com/LucasEzequielBecerra/Amazing-Movie-Searcher" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://movie-searcher-app-two.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>
        </div>
      </Box>
    </section>
  )
}

export default Projects

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
            <h3 className='title-single-project' >The-Way-Camp</h3>
            <h6 className='project-description'>This project is a static landing page created for a camp. It has implemented figma designs and a composite structure. The CSS is made with tailwind</h6>
            <ul className='skills-applied'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
            </ul>
            <div className='page-info'><a target='_blank' href="github.com/LucasEzequielRamos/The-Way-Camp" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://the-way-camp-3vqwhjepx-lucasezequielbecerra.vercel.app" rel="noreferrer">
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
          <img className='project-image' src="Twitter-Clone-project.jpg" alt="Twitter Clone Background Image" />
          <div className='info-column'>
            <h3 className='title-single-project' >Twitter Clone</h3>
            <h6 className='project-description'>This project is a clone of the social network Twitter with some of its functionalities. I use the technologies of NextJS, Prisma ORM, MySQL, Tailwind. Implemented use of Next Auth to handle authorization and session cookies. I implement server actions with fetch to my api routes, with header management and custom server responses.</h6>
            <ul className='skills-applied'>
              <li>NextJS</li>
              <li>Typescript</li>
              <li>Prisma ORM</li>
              <li>MySQL</li>
              <li>Tailwind</li>
              <li>Next Auth</li>
            </ul>
            <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielRamos/Twitter-Clone" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://twitter-clone-theta-bay.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </div>
        </article>
      </Box>
      <Box >
        <h2>Other Projects</h2>
        <div className='other-projects-box'>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>Spotify-searcher</h4>
            <p> This is my first project together with another developer. We implemented the spotify api in a react application that works as if it were the spotify search engine.</p>
            <ul className='skills-applied-min'>
              <li>Html</li>
              <li>Css</li>
              <li>Tailwind</li>
              <li>ReactJS</li>
              <li>Vite</li>
            </ul>
            <div className='links-container'><a target='_blank' href="https://github.com/LucasEzequielRamos/Spotify-Searcher" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://spotify-searcher-5n7l9uguz-lucasezequielbecerra.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>E-Commerce-API</h4>
            <p> This is my final backend project to finish my degree as a full stack programmer in CoderHouse. This project is a e-commerce API for add and manage users and products</p>
            <ul className='skills-applied-min'>
              <li>Node</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Passport</li>
              <li>Swagger</li>
              <li>Express-Session</li>
            </ul>
            <div className='links-container'><a target='_blank' href="https://github.com/LucasEzequielRamos/Ecommerce-Api" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://ecommerce-api-dev-txxg.1.us-1.fl0.io/docs/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>
          <article className='other-projects-card'>
            <h4 className='title-other-project'>Book-Library</h4>
            <p> This project was to reinforce good practices in react. It is a book search engine, which I have saved inside a mock, where I simulate a fetch by making it async. I implement an end-to-end test where I test each part of the project as if it were a client, from adding, searching, and deleting the books.</p>
            <ul className='skills-applied-min'>
              <li>Html</li>
              <li>Css</li>
              <li>ReactJs</li>
              <li>Testing-library/react</li>
              <li>Tailwind</li>
              <li>Vitest</li>
            </ul>
            <div className='links-container'><a target='_blank' href="https://github.com/LucasEzequielRamos/Book-Library" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg" stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a target='_blank' href="https://book-library-pearl.vercel.app/" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
              </a></div>
          </article>

        </div>
      </Box>
    </section>
  )
}

export default Projects

import { Box } from '@mui/material'
import './Projects.css'

const Projects = () => {
  return (
    <section id='projects'>
        <Box className='projects-box'>
                <h2 className='title-projects-section'>Projects</h2>
            <div className='single-project'>
                <img className='project-image' src="FaMusic-project-image.jpg" alt="Famusic Background Image" />
                <div className='info-column'>
                    <h3 className='title-single-project' >FaMusic</h3>
                    <p className='project-decription'>This project is a web model of a virtual instrument store. It has 5 sections and css animation libraries</p>
                    <ul className='skills-applied'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                    </ul>
                    <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielBecerra/FaMusic" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg"  stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    <a target='_blank' href="https://lucasezequielbecerra.github.io/FaMusic/" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                    </a></div>
                </div>
            </div>
            <div className='single-project'>
                <img className='project-image' src="Art&Air-project-image.jpg" alt="Famusic Background Image" />
                <div className='info-column'>
                    <h3 className='title-single-project' >Art&Air</h3>
                    <p className='project-decription'>My first project with react. Apply the technologies learned, such as context, router-dom, and the firebase implementation. The project is an e-commerce of art articles. It has cart and purchase order data. All the information, from the articles to the buyer data, is found in the firebase database</p>
                    <ul className='skills-applied'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>Vite</li>
                    <li>Bootstrap</li>
                    <li>Firebase / Firestore Database</li>
                    </ul>
                    <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielBecerra/ArtAir" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg"  stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    <a target='_blank' href="https://art-air.vercel.app/" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                    </a></div>
                </div>
            </div>
            <div className='single-project'>
                <img className='project-image' src="MovieSearcherApp-project-image.jpg" alt="Famusic Background Image" />
                <div className='info-column'>
                    <h3 className='title-single-project' >Movie Searcher App</h3>
                    <p className='project-decription'>This project is a movie search engine. I did it with the purpose of improving my code and my react skills. It has readable and scalable code, use of custom hooks, consumption of the OMDB api. It is still under construction</p>
                    <ul className='skills-applied'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>ReactJs</li>
                    <li>Vite</li>
                    </ul>
                    <div className='page-info'><a target='_blank' href="https://github.com/LucasEzequielBecerra/Amazing-Movie-Searcher" rel="noreferrer"><svg className='icon-info' xmlns="http://www.w3.org/2000/svg"  stroke='currentColor' strokeWidth="2" fill='none' viewBox="0 0 24 24"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
                    <a target='_blank' href="https://movie-searcher-app-two.vercel.app/" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" className='icon-info' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="9"></circle><line x1="3.6" y1="9" x2="20.4" y2="9"></line><line x1="3.6" y1="15" x2="20.4" y2="15"></line><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                    </a></div>
                </div>
            </div>
        </Box>
    </section>
  )
}

export default Projects
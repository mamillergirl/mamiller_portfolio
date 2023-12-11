import '../App.css';
import {Header} from './header'
import { Footer } from './footer';
import cookboost from '../cookboost.png'; 
import supersaver from "../supersaver.png"
import iride from "../iride.png"
import webscraper from '../webscraper.png'

function Projects() {
  return (
    <>
    <Header/>
    <div className="projects">
          <div className='project'>
            <div className='info'>
            <h2>Rexburg SuperSaver Web App | 3rd Place Hackathon Win </h2>
            <p className='description'>

            I led a hackathon project that resulted in a React-based platform designed for residents in our college town to access and save data from local grocery stores. As the originator of the concept, I handled the frontend development, serving as both the project manager and a proactive team member, overseeing task delegation and project planning. Taking charge of the app's design in Figma, I ensured its usability and visual appeal.
            </p>
            <p className='description'>
            The web application, utilized web scraping to aggregate and showcase exclusive deals and discounts from nearby grocery stores. This platform aimed to simplify the process for shoppers, offering a centralized space to explore, save and access money-saving opportunities within their community.              </p>
            <div>
            <a  className='link button' href="https://github.com/Ellaluvscheese/RexburgSuperSaver">View Repository</a>
            </div>
            </div>
            <img src={supersaver} alt='rexburg supersaver screenshot'/>
          </div>
          <div className='project'>
            <div className='info'>
            <h2>I-Ride | Rideboard Mobile App </h2>
            <p className='description'>

            Our class project aimed to simplify the process of carpooling for students by creating a dedicated ride board app, addressing the shortcomings of using Facebook for such purposes. Recognizing the confusion and complexity of navigating Facebook for carpooling, especially in an area lacking alternative options, our team developed a user-friendly platform.            </p>
            <p className='description'>
            As a team member, my contributions included establishing the database infrastructure with Firebase Firestore and working on the frontend of the app with React Native. The app provided students with a more efficient way to organize rides and share transportation, offering a simpler and more tailored solution compared to the challenges posed by using Facebook for this purpose.                 </p>
            <div>
            <a  className='link button' href="https://github.com/HuairaNimrod/I-ride">View Repository</a>
            </div>
            </div>
            <img src={iride} alt='iride screenshot'/>
          </div>
          <div className='project'>
            <div className='info'>
            <h2>Book REST API</h2>
            <p className='description'>
            Implemented a Node.js Express API integrated with MongoDB, enabling seamless CRUD operations for managing books and authors. Developed as part of a web services class, this project showcases proficiency in backend development and database management for scalable web applications. </p>
            <div>
            <a className='link button' href="https://cse341-books.onrender.com/api-docs/">View Project</a>
            <a className='link button' href="https://github.com/mamillergirl/cse341-books">View Repository</a>
            </div>
            </div>
          </div>
          <div className='project'>
          <div className='info'>
          <h2>Cookboost | Recipe Manager Web App</h2>
          <p className='description'>
          Cookboost marks my debut project in React - a web application designed to gather user-input ingredients and generate corresponding recipe cards. Leveraging the Edamam Recipe Search API, it retrieves recipes based on user-provided ingredients and incorporates features like saving recipes using Local Storage.</p>
          <div>
          <a className="link button" href= "https://mamillergirl.github.io/cookboost/" >View Project Demo</a>
          <a  className='link button' href="https://github.com/mamillergirl/cookboost">View Repository</a>
          </div>
          </div>
          <img src={cookboost} alt='cook boost screenshot'/>
          </div>
          <div className='project'>
          <div className='info'>
          <h2>Realty Web Scraper App</h2>
          <p className='description'>
          
          I contributed significantly to a web scraping platform developed in data science society in collaboration with Sotheby's Realty, aimed at ensuring consistency in property prices across various online platforms.</p>
          <div>
         
          <a className='link button' href="https://github.com/BYUIDSS/DSS_F22_InternationalRealty">View Repository</a>
          </div>
         
          </div>
          <img src={webscraper} alt='webscraper'/>
          </div>
       </div>

      <Footer/>
       </>
  );
}

export {Projects};

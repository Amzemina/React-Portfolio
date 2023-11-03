//Portfolio component

//portfolio stylesheet
import './Portfolio.css';
//project component
import Project from '../Project/project';
//project data
import projects from '../../projectData/Projects.js';

function Portfolio() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="img-container">
          {projects.map((project) => (
            <Project key={project.title} deployed={project.deployed} image={project.image} alt={project.alt} title={project.title} github={project.github} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Portfolio;
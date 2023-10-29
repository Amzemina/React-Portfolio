import horiseonPNG from '../../assets/horiseon.png';
import fancyPNG from '../../assets/Fancy.png';
import rhythmPNG from '../../assets/Rhythm.png';
import { FaGithub } from 'react-icons/fa';
import './Portfolio.css';

function Portfolio() {
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="img-container">
          <div className="img-card">
            <a href="https://amzemina.github.io/Horiseon/">
              <img src={horiseonPNG} alt="screenshot of deployed Horiseon project" />
            <div className="img-text">Horiseon-project</div>
            </a>
            <a href="https://github.com/Amzemina/Horiseon">
            <FaGithub />
            </a>
          </div>
          <div className="img-card">
            <a href="https://ejoseph10.github.io/Fancy-Minute-Chef/">
              <img src={fancyPNG} alt="screenshot of deployed Fancy Minute Chef project" />
              <div className="img-text">Fancy-Minute-Chef</div>
            </a>
            <a href="https://github.com/ejoseph10/Fancy-Minute-Chef">
            <FaGithub />
            </a>
          </div>
          <div className="img-card">
            <a href="https://rhythm-reviews-8a43a75413f9.herokuapp.com/">
              <img src={rhythmPNG} alt="screenshot of deployed Rhythm Reviews project" />
              <div className="img-text">Rhythm-Reviews</div>
            </a>
            <a href="https://github.com/group7-project2/rhythm-reviews">
            <FaGithub />
            </a>
          </div>
          <div className="img-card">
            <img src="https://placehold.co/400x200" alt="grey placeholder box with dimensions of image" />
            <div className="img-text">Placeholder</div>
          </div>
          <div className="img-card">
            <img src="https://placehold.co/400x200" alt="grey placeholder box with dimensions of image" />
            <div className="img-text">Placeholder</div>
          </div>
          <div className="img-card">
            <img src="https://placehold.co/400x200" alt="grey placeholder box with dimensions of image" />
            <div className="img-text">Placeholder</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Portfolio;
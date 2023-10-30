import "./AboutMe.css";
import PortfolioPic from "../../assets/PortfolioPic.jpg";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <img src={PortfolioPic} alt="picture of ashley"/>

      <p>
        I am a full stack web developer with a passion for learning and
        creating. I am a graduate of the UCONN Coding Bootcamp where I learned to be proficient in MERN stack. 
        I have experience working with various teams of developers to create multiple full stack
        applications. I am a fast learner and I am always looking for ways to
        improve my skills as a developer.
      </p>
    </div>
  );
}

export default AboutMe;
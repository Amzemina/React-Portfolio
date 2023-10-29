import resumePDF from '../../assets/resume.pdf';
import "./Resume.css"

function Resume() {
    return (
        <div className="resume">
            <div>
                <h2>Download my resume:</h2>
                <a href={resumePDF} download>
                    Download
                </a>
            </div>
        
            <div>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>   
            </div>
            <div>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    );
}

export default Resume;

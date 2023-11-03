//Project component

//props
import PropTypes from 'prop-types';
//github icon
import { FaGithub } from 'react-icons/fa';

//project prop types
Project.propTypes = {
    deployed: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
};

function Project(props) {
    return (
        <div className="img-card">
            <a href={props.deployed}>
                <img src={props.image} alt={props.alt} />
                <div className="img-text">{props.title}</div>
            </a>
            <a href={props.github}>
                <FaGithub />
            </a>
        </div>
    );
}



export default Project;
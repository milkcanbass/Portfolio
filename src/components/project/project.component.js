import React from 'react';
import { ProjectStyles } from './project.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Project = props => {
  const { name, imageUrl, description, url, sourceUrl, linkedin } = props;
  return (
    <ProjectStyles>
      <div className="projectWrapper">
        <img src={imageUrl} />
        <div className="projectBody">
          <div className="background">
            <div className="description">{description}</div>
          </div>
        </div>
        <div className="projectFooter">
          <a className="name" href={url} target="_blank">
            {name}
          </a>
          <a className="githubIcon" target="_blank" href={sourceUrl}>
            {linkedin ? <FontAwesomeIcon icon={faLinkedin} /> : <FontAwesomeIcon icon={faGithub} />}
          </a>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Project;

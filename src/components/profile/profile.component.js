import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAdobe } from '@fortawesome/free-brands-svg-icons';

import { faGamepad } from '@fortawesome/free-solid-svg-icons';
const ProfileSection = () => {
  return (
    <div className="skillWrapper">
      {' '}
      <div className="skillContent">
        <h3 className="title">Skills</h3>
        <div className="skillList">
          <div className="frontend">
            <FontAwesomeIcon icon={faReact} className="icons" />

            <h3 className="skillTitle">Front-end</h3>
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>Webpack</h4>
            <h4>Jest</h4>
            <h4>Bootstrap</h4>
            <h4>JavaScript</h4>
            <h4>CSS/SASS</h4>
            <h4>html</h4>
          </div>
          <div className="backend">
            <FontAwesomeIcon icon={faNodeJs} className="icons" />
            <h3 className="skillTitle">Back-end</h3>
            <h4>Node.js</h4>
            <h4>Express</h4>
            <h4>Firebase</h4>
            <h4>MongoDB</h4>
          </div>
          <div className="gameDevelopment">
            <FontAwesomeIcon icon={faGamepad} className="icons" />
            <h3 className="skillTitle">Game Development</h3>
            <h4>Game design</h4>
            <h4>Level design</h4>
            <h4>UI design</h4>
            <h4>Direction</h4>
            <h4>Project management</h4>
          </div>
          <div className="tools">
            <FontAwesomeIcon icon={faAdobe} className="icons" />
            <h3 className="skillTitle">Tools</h3>
            <h4>Github</h4>
            <h4>Jira</h4>
            <h4>Photoshop</h4>
            <h4>Final Cut</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSection;

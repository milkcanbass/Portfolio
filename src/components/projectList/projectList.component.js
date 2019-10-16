import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjectListData } from '../../redux/projectList/projectList.selectors';
import Project from '../project/project.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProjectList = ({ projectList }) => {
  console.log(projectList);
  return (
    <div className="projectWrapper">
      {projectList.map(project => (
        <Project {...project} />
      ))}

      {/* <div className="projectContent">
        <div className="p1">
          <div className="p1Img" />
        </div>

        <div className="p1Desc">
          <div className="p1DescCont">
            <h3>MapLog</h3>
            <h4>
              Personal image data storage web service with google map API. Developed with React,
              Redux, Node, and MongoDB.
              <br />
              <a
                className="linkedWebsite"
                target="_blank"
                rel="noopener noreferrer"
                href="https://fierce-sierra-91230.herokuapp.com/"
              >
                Click here to access.
              </a>
            </h4>
            <div className="github">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/milkcanbass/mapLog"
              >
                <FontAwesomeIcon
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/milkcanbass/mapLog"
                  icon={faGithub}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="p2">
          <div className="p2Img" />
        </div>

        <div className="p2Desc">
          <div className="p2DescCont">
            <h3>Game development</h3>
            <h4>
              As a game designer, developed multiple games on several platforms from mobile to
              console. Check Linkedin to see the titles.
            </h4>
            <div className="linkedin">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shintaro-kai-4557079b/"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  projectList: selectProjectListData,
});

export default connect(mapStateToProps)(ProjectList);

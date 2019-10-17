import React from 'react';
import { ProjectListStyles } from './projectList.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProjectListData } from '../../redux/projectList/projectList.selectors';
import Project from '../project/project.component';

const ProjectList = ({ projectList }) => {
  console.log(projectList);
  return (
    <ProjectListStyles>
      <div className="projectListWrapper">
        <h3 className="title">Projects</h3>
        <div className="projectWrapper">
          {projectList.map(project => (
            <Project {...project} />
          ))}
        </div>
      </div>
    </ProjectListStyles>
  );
};

const mapStateToProps = createStructuredSelector({
  projectList: selectProjectListData,
});

export default connect(mapStateToProps)(ProjectList);

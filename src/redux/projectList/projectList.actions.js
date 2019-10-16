import { getAllProject } from './projectList.types';

export const getAllProject = () => dispatch => {
  dispatch({ type: GET_ALL_PROJECT });
};

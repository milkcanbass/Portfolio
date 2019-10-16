import { projectListData } from './projectListData';

const INITIAL_STATE = {
  projectList: projectListData,
};

const projectListReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
export default projectListReducer;

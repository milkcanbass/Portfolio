import { createSelector } from 'reselect';

const selectProjectList = state => state.projectList;

export const selectProjectListData = createSelector(
  [selectProjectList],
  projectList => projectList.projectList,
);

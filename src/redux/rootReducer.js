import { combineReducers } from 'redux';
import landingReducer from './landing/landing.reducer';
import projectListReducer from './projectList/projectList.reducer';

const rootReducers = combineReducers({
  landing: landingReducer,
  projectList: projectListReducer,
});

export default rootReducers;

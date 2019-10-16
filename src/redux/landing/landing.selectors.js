import { createSelector } from 'reselect';

const selectLandingReducer = state => state.landing;

export const selectLandingSidebar = createSelector(
  [selectLandingReducer],
  landing => landing.sidebar,
);

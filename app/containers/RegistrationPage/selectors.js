/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUsername = () =>
  createSelector(selectHome, (homeState) => homeState.get('username'));

const makeSelectUser = () =>
  createSelector(selectHome, (homeState) => homeState);

export { selectHome, makeSelectUsername, makeSelectUser };

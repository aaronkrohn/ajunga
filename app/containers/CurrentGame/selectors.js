import { createSelector } from 'reselect';

/**
 * Direct selector to the currentGame state domain
 */
const selectCurrentGameDomain = (state) => state.get('currentGame');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CurrentGame
 */

const makeSelectCurrentGame = () => createSelector(
  selectCurrentGameDomain,
  (substate) => substate.toJS()
);

export default makeSelectCurrentGame;
export {
  selectCurrentGameDomain,
};

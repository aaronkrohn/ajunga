/*
 *
 * CurrentGame reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FINAL_SCORE,
  INCREMENT_GAME_WON,
  CHECK_SERVER,
} from './constants';

const initialState = fromJS({
  player1: {
    age: null,
    gender: null,
    isLeftPosition: true,
    isRightHanded: true,
    name: 'Aaron',
    gamesWon: 0,
  },
  player2: {
    age: null,
    gender: null,
    isLeftPosition: false,
    isRightHanded: true,
    name: 'Jason',
    gamesWon: 0,
  },
  player1toStart: true,
  gameTotal: 3,
  gameLength: 11,
  numberServes: 2,
  score: [],
  changeServer: false,
  winner: null,
  startingPlayer: 'player1',
});

function currentGameReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FINAL_SCORE:
      return state.updateIn(['score'], (score) => score.push(action.payload));

    case INCREMENT_GAME_WON:
      return state.updateIn([action.payload, 'gamesWon'], (score) => score + 1);

    case CHECK_SERVER:
      return state.updateIn(['changeServer'], () => !state.getIn(['changeServer']));
    default:
      return state;
  }
}

export default currentGameReducer;

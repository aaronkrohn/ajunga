/*
 *
 * CurrentGame reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FINAL_SCORE,
  INCREMENT_GAME_WON,
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
    isLeftPosition: true,
    isRightHanded: true,
    name: 'Jason',
    gamesWon: 0,
  },
  gameTotal: 3,
  gameLength: 11,
  numberServes: 2,
  score: [],
  winner: null,
  startingPlayer: 'player1',
});

function currentGameReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FINAL_SCORE:
      return state.updateIn(['score'], (score) => score.push(action.payload));

    case INCREMENT_GAME_WON:
      return state.updateIn([action.payload, 'gamesWon'], (score) => score + 1);

    default:
      return state;
  }
}

export default currentGameReducer;

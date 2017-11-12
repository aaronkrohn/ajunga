/*
 *
 * CurrentGame reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_FINAL_SCORE,
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
      // return state.set.add('score', action.payload);
      return state.updateIn(['score'], (score) => score.push(action.payload));
    default:
      return state;
  }
}

export default currentGameReducer;

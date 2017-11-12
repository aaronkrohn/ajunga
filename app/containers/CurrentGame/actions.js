/*
 *
 * CurrentGame actions
 *
 */

import {
  ADD_FINAL_SCORE,
  INCREMENT_GAME_WON,
} from './constants';

export function addFinalScore(score) {
  return {
    type: ADD_FINAL_SCORE,
    payload: score,
  };
}

export function addGamesWon(playerName) {
  return {
    type: INCREMENT_GAME_WON,
    payload: playerName,
  };
}

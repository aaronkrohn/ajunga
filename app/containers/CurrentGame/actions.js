/*
 *
 * CurrentGame actions
 *
 */

import {
  ADD_FINAL_SCORE,
} from './constants';

export function addFinalScore(score) {
  return {
    type: ADD_FINAL_SCORE,
    payload: score,
  };
}

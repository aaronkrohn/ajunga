
import { fromJS } from 'immutable';
import currentGameReducer from '../reducer';

describe('currentGameReducer', () => {
  it('returns the initial state', () => {
    expect(currentGameReducer(undefined, {})).toEqual(fromJS({}));
  });
});

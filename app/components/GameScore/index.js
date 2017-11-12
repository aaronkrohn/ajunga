/**
 *
 * GameScore
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';


class GameScore extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      score1: 0,
      score2: 0,
      player1Name: 'player1',
      player2Name: 'player2',
      wonGame: null,
    };
  }

  resetGame() {
    this.setState({
      score1: 0,
      score2: 0,
      wonGame: null,
    });
  }

  checkGameFinished() {
    const { score1, score2 } = this.state;
    const { gameLength } = this.props.currentGame;
    const hasReachedGameLength = (score1 >= gameLength || score2 >= gameLength);
    const clearTwoPoints = (score1 > score2 + 1 || score2 > score1 + 1);

    if (hasReachedGameLength) {
      if (clearTwoPoints) {
        this.props.handleFinalScore([score1, score2]);
        this.setState({ wonGame: score1 > score2 ? this.state.player1Name : this.state.player2Name });
      }
    }
  }

  addPoint(event, isPlayerLeft) {
    if (this.state.wonGame) {
      return;
    }

    const isPlayer1 = isPlayerLeft ? 'score1' : 'score2';
    // SetState is asynchronous, so we have callback.
    this.setState({ [isPlayer1]: this.state[isPlayer1] + 1 }, () => this.checkGameFinished());
  }

  render() {
    return (
      <div>
        <h2>Game Scores</h2>

        {/* Player 1 */}
        <div>
          {this.props.currentGame.player1.name} score: {this.state.score1}
          <button
            onClick={(event) => this.addPoint(event, true)}
            style={{ background: 'grey', marginLeft: 10 }}
          >
            point 1+
          </button>
          {
            this.state.wonGame === this.state.player1Name &&
            <span>Winner</span>
          }
        </div>

        {/* Player 2 */}
        <div>
          {this.props.currentGame.player2.name} score: {this.state.score2}
          <button
            onClick={(event) => this.addPoint(event, false)}
            style={{ background: 'grey', marginLeft: 10 }}
          >
            point 1+
          </button>
          {
            this.state.wonGame === this.state.player2Name &&
            <span>Winner</span>
          }
        </div>

        {
          this.state.wonGame &&
          <button onClick={() => this.resetGame()} style={{ background: 'green', marginTop: 20 }}>New game</button>
        }
      </div>
    );
  }
}

GameScore.propTypes = {
  handleFinalScore: PropTypes.func.isRequired,
};

export default GameScore;

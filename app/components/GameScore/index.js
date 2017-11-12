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
    const {score1, score2} = this.state;
    const {gameLength} = this.props.currentgame;
    console.log('checkGameFinished');
    if ((score1 >= gameLength || score2 >= gameLength)) {
      this.props.handleFinalScore([score1, score2]);

      console.log('game won');
      this.setState({wonGame: score1 > score2 ? this.state.player1Name : this.state.player2Name});
    }
  }

  addPoint(event, player) {
    if (this.state.wonGame) {
      return
    }

    const isPlayer1 = player === this.state.player1Name ? 'score1' : 'score2';
    this.setState({[isPlayer1]: this.state[isPlayer1] + 1}, () => this.checkGameFinished());
  }

  render() {
    return (
      <div>
        <h2>Game Scores</h2>

        {/* Player 1 */}
        <div>
          Player1 score: {this.state.score1}
          <button
            onClick={(event) => this.addPoint(event, this.state.player1Name)}
            style={{background: 'grey', marginLeft: 10}}
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
          Player2 score: {this.state.score2}
          <button
            onClick={(event) => this.addPoint(event, this.state.player2Name)}
            style={{background: 'grey', marginLeft: 10}}
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
          <button onClick={() => this.resetGame()}>New game</button>
        }
      </div>
    );
  }
}

GameScore.propTypes = {
  handleFinalScore: PropTypes.func.isRequired,
};

export default GameScore;

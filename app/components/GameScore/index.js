/**
 *
 * GameScore
 *
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { global } from "../../utils/constants";

const GameScoreDisplay = styled.div `
  display: table;
  width: 100%;
`;
const GameScoreNUmber = styled.div `
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  width: 50%;
  height: 100%;
  color: ${global.colour.gold};
  font-size: 190px;
  line-height: 1;
  padding: 15px;
  border: 4px solid ${global.colour.gold};
  
  &:last-child {
    border-left: 0;
  }
`;
const OverLay = styled.div`
  position: absolute;
  background-color: ${global.colour.gold};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  div {
    position: absolute;
    text-align: center;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    
    h3, p {
      margin: 0;
    }
  }
`;

class GameScore extends React.PureComponent {
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

  componentWillMount() {
    window.addEventListener('keydown', (event) => this.clickHandler(event), false);
  }

  clickHandler(event) {
    const keyBindings = {
      'ArrowUp': () => {
        this.updatePoint(true, event.altKey);
      },
      'ArrowDown': () => {
        this.updatePoint(false, event.altKey);
      },
      'Enter': () => {
        this.state.wonGame && this.resetGame();
      },
    };
    keyBindings[event.key] && keyBindings[event.key]();
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

  checkSwitchServer() {
    const { score1, score2 } = this.state;
    if ((score1 + score2) % 2 === 1) {
      this.props.changeServer();
    }
  }

  updatePoint(isPlayerLeft, removePoint) {
    if (this.state.wonGame) {
      return;
    }
    this.checkSwitchServer();
    const point = removePoint ? -1 : 1;
    const isPlayer1 = isPlayerLeft ? 'score1' : 'score2';
    // SetState is asynchronous, so we have callback.
    this.setState({ [isPlayer1]: this.state[isPlayer1] + point }, () => this.checkGameFinished());
  }

  render() {
    return (
      <div>
        <GameScoreDisplay>
          <GameScoreNUmber>{this.state.score1}</GameScoreNUmber>
          <GameScoreNUmber>{this.state.score2}</GameScoreNUmber>
        </GameScoreDisplay>
        {
          this.state.wonGame &&
          <OverLay>
            <div>
              <h3>{this.props.currentGame[this.state.wonGame].name} won</h3>
              <p>Press enter to start next game.</p>
            </div>
          </OverLay>
        }
      </div>
    );
  }
}

GameScore.propTypes = {
  handleFinalScore: PropTypes.func.isRequired,
  currentGame: PropTypes.object.isRequired,
  changeServer: PropTypes.func.isRequired,
};
export default GameScore;

/**
 *
 * GameOverview
 *
 */

import React from 'react';

// import styled from 'styled-components';


class GameOverview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {player1, player2, gameLength} = this.props.currentgame;
    return (
      <div>
        <h2>Game Overview</h2>
        <div>
          <span>{player1.name} </span>
          <span>{player1.gamesWon}</span>
        </div>

        <div>
          <span>{player2.name} </span>
          <span>{player2.gamesWon}</span>
        </div>
      </div>
    );
  }
}

GameOverview.propTypes = {};

export default GameOverview;

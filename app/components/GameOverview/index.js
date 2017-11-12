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
        <div>
          <h2>{player1.name}</h2>
          <h2>{player1.gamesWon}</h2>
        </div>

        <div>
          <h2>{player2.name}</h2>
          <h2>{player2.gamesWon}</h2>
        </div>
      </div>
    );
  }
}

GameOverview.propTypes = {};

export default GameOverview;

/**
 *
 * GameScore
 *
 */

import React from 'react';

// import styled from 'styled-components';


class GameScore extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      player1: 0,
      player2: 0,
    };
  }

  componentDidmount() {

  }

  render() {
    return (
      <div>
        <div>GameScores</div>
      </div>
    );
  }
}

GameScore.propTypes = {};

export default GameScore;

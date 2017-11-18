/**
 *
 * GameOverview
 *
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


//TODO Normally you would put theses styles in their own files

const OverViewTitle = styled.h5 `
  width: 100%;
  color: #A68756;
  margin: 0 0 5px 0;
  text-align: center;
  font-weight: lighter
`;

const GridThird = styled.div`
  width: 33.33%;
`;

const PlayerTitle = styled.h3`
  text-transform: uppercase;
  color: #A68756;
  font-size: 38px;
  text-align: left;
  margin: 0;
  
  ${props => props.height && css`
		line-height: ${props.height}
	`}
  
  ${props => props.right && css`
		text-align: right;
	`}
`;

const PlayerScore = styled.div`
  color: #272628;
  font-weight: bolder;
  font-size: 24px;
  width: 60px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #A68756;
  background: #A68756;

  
  ${props => props.outline && css`
    color: #A68756; 
    background: inherit;
    margin: auto
  `}
  
  ${props => props.left && css`
		float: left;
	`}
  
  ${props => props.right && css`
		float: right;
	`}
`;

const ServingBall = styled.span`
  background: #ffffff;
  position: absolute;
  top: 50%;
  border-radius: 5px;
  transform: translateY(-50%);
  display: inline;
  right: -30px;
 
  ${props => props.left && css`
		left: -30px !important;
		right: auto !important;
	`}
	 
  ${props => props.switch && css`
		left: auto;
		right: -30px;
	`}
	 
  ${props => props.ballSize && css`
		width: ${props.ballSize}px;
		height: ${props.ballSize}px;
		border-radius: ${props.ballSize}px;
	`}
`;


class GameOverview extends React.PureComponent {
  switcherServer(force) {
    // TODO Think we need to add each score to store to make things easier for us. INCREMENT_SCORE with payload of name.
  }

  render() {
    const { player1, player2, player1toStart, changeServer } = this.props.currentGame;

    return (
      <section>
        <OverViewTitle>Games Won</OverViewTitle>

        <section style={{ display: 'flex' }}>
          <GridThird>
            <PlayerTitle>{player1.name}</PlayerTitle>
          </GridThird>

          <GridThird>
            <div style={{ display: 'flex', width: 200, margin: 'auto', position: 'relative' }}>
              <ServingBall left={changeServer ? !player1toStart : player1toStart} switch={changeServer} ballSize={10} />

              <GridThird>
                <PlayerScore right>{player1.gamesWon}</PlayerScore>
              </GridThird>

              <GridThird>
                <PlayerScore outline>VS</PlayerScore>
              </GridThird>

              <GridThird>
                <PlayerScore left>{player2.gamesWon}</PlayerScore>
              </GridThird>
            </div>
          </GridThird>

          <GridThird>
            <PlayerTitle right>{player2.name} </PlayerTitle>
          </GridThird>
        </section>
      </section>
    )
      ;
  }
}

GameOverview.propTypes = {
  currentGame: PropTypes.object.isRequired,
};

export default GameOverview;

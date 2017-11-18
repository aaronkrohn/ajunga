/**
 *
 * CurrentGame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectCurrentGame from './selectors';
import reducer from './reducer';
import GameOverview from 'components/GameOverview';
import GameScore from 'components/GameScore';
import CenteredSection from './CenteredSection';

import { addFinalScore, addGamesWon, changeServer } from './actions';

export class CurrentGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleFinalScore = this.handleFinalScore.bind(this);
  }

  handleFinalScore(score) {
    this.props.addFinalScore(score);
    this.props.addGamesWon(score[0] > score[1] ? 'player1' : 'player2');
  }

  render() {
    return (
      <CenteredSection>
        <Helmet>
          <title>CurrentGame</title>
          <meta name="description" content="Description of CurrentGame"/>
        </Helmet>

        <GameOverview currentGame={this.props.currentGame}/>

        <GameScore
          currentGame={this.props.currentGame}
          handleFinalScore={this.handleFinalScore}
          changeServer={this.props.changeServer}
        />


        <h2>Previous games</h2>
        {
          this.props.currentGame.score.map((score, index) => {
            return (<div>
              <span>{this.props.currentGame.player1.name} {score[0]}</span> |
              <span> {this.props.currentGame.player2.name} {score[1]}</span>
            </div>);
          })
        }
      </CenteredSection>
    );
  }
}

CurrentGame.propTypes = {
  currentGame: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentGame: makeSelectCurrentGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    addFinalScore: (score) => {
      dispatch(addFinalScore(score));
    },
    addGamesWon: (playerName) => {
      dispatch(addGamesWon(playerName));
    },
    changeServer: (playerName) => {
      dispatch(changeServer(playerName));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'currentGame', reducer });

export default compose(
  withReducer,
  withConnect,
)(CurrentGame);

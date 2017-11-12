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

import { addFinalScore } from './actions';

export class CurrentGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

  }

  handleFinalScore() {
    console.log('click');

    this.props.addFinalScore([15, 11]);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>CurrentGame</title>
          <meta name="description" content="Description of CurrentGame"/>
        </Helmet>
        <GameOverview currentgame={this.props.currentgame}/>
        <GameScore/>
        <h1 onClick={this.handleFinalScore.bind(this)}>button</h1>
      </div>
    );
  }
}

CurrentGame.propTypes = {
  currentgame: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentgame: makeSelectCurrentGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    addFinalScore: (score) => {
      dispatch(addFinalScore(score));
    },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'currentGame', reducer});

export default compose(
  withReducer,
  withConnect,
)(CurrentGame);

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

export class CurrentGame extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>CurrentGame</title>
          <meta name="description" content="Description of CurrentGame" />
        </Helmet>
      </div>
    );
  }
}

CurrentGame.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  currentgame: makeSelectCurrentGame(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'currentGame', reducer });

export default compose(
  withReducer,
  withConnect,
)(CurrentGame);

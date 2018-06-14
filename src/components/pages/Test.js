import React, { Component } from 'react';
import mainTemplate from '../templates/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../redux/actions/common';

class Test extends Component {
  render() {
    const { common } = this.props;

    return (
      <div>
        {common.pending ? (
          <h2>Loading...</h2>
        ) : common.error ? (
          <h1>Error!</h1>
        ) : (
          <div>{JSON.stringify(common.data)}</div>
        )}
      </div>
    );
  }
}

export default mainTemplate(
  connect(
    state => ({
      common: state.common.toJS()
    }),
    dispatch => ({
      CommonActions: bindActionCreators(commonActions, dispatch)
    })
  )(Test)
);

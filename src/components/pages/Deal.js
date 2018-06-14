import React, { Component } from 'react';
import mainTemplate from '../templates/Main';

class Deal extends Component {
  render() {
    const { match } = this.props;
    return (
      <h1>
        route: {match.path} id: {match.params.id}
      </h1>
    );
  }
}

export default mainTemplate(Deal);

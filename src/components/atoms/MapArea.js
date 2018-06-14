import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import urlRules from '../../lib/urlRules';

class MapArea extends Component {
  render() {
    const { linkType, linkInfo, mapPosition } = this.props;
    return (
      <Link to={`/${urlRules[linkType]}/${linkInfo}`}>
        <area shape="poly" coords={mapPosition} alt="배너" />
      </Link>
    );
  }
}

export default MapArea;

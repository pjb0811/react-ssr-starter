import React, { Component } from 'react';

const Main = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <React.Fragment>
          <Helmet>
            <title>Main templates</title>
          </Helmet>
        </React.Fragment>
      );
    }
  };
};

export default Mainl;

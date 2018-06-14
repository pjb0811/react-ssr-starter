import React, { Component } from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Main = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <div id="_wrap" className="wrap">
          <div id="_header" className="mix_header">
            {/* <Loader
              response={{ ...this.props.common }}
              render={data => {
                return <GlobalBanner data={data} />;
              }}
            /> */}
            <Header {...this.props} />
          </div>
          <div id="_container" className="container main">
            <WrappedComponent {...this.props} />
          </div>
          <div id="_footer" className="footer_wrap">
            <Footer />
          </div>
        </div>
      );
    }
  };
};

export default Main;

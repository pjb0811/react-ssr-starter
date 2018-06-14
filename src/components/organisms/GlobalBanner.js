import React, { Component } from 'react';
import BannerMap from '../molecules/BannerMap';
import styled from 'styled-components';

const BannerContainer = styled.div`
  display: block;
  background: ${props => props.bgColor};
`;

class GlobalBanner extends Component {
  render() {
    const { data } = this.props;
    const [bannertop] = data.bannertop;

    return (
      <BannerContainer
        bgColor={bannertop.bgColor}
        className="mix_global_banner"
        id="_topBannerContainer"
      >
        <div className="mix_inner">
          <img src={bannertop.imgUrl} alt="0611_00~24" useMap="#top_ban_map" />
        </div>
        <button
          type="button"
          className="mix_banner_close"
          data-banner-seq="1291"
          id="_topBannerCloseBtn"
        >
          <span className="spr_mix mix_topbanner_close" />
        </button>
        <BannerMap items={bannertop.subLink} />
      </BannerContainer>
    );
  }
}

export default GlobalBanner;

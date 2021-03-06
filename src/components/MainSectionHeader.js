import PropTypes from 'prop-types';
import React from 'react';

import {
  MainSectionHeaderContainer,
  MainSectionHeaderSubtitleLeft,
  MainSectionHeaderSubtitleRight,
  MainSectionHeaderTitleLeft,
  MainSectionHeaderTitleLeftContainer,
  MainSectionHeaderTitleRight,
  MainSectionHeaderTitleRightContainer,
} from '../style';

const getUrlProps = (url) => {
  if (url) {
    return {
      as: 'a',
      href: url,
      target: '__blank',
    };
  }

  return null;
};

const MainSectionHeader = ({
  titleLeft,
  titleRight,
  subtitleLeft,
  subtitleRight,
  rightUrl,
  leftStyle = {},
  rightStyle = {},
  removeMarginBottom,
}) => (
  <MainSectionHeaderContainer removeMarginBottom={removeMarginBottom}>
    <MainSectionHeaderTitleLeftContainer style={leftStyle}>
      <MainSectionHeaderTitleLeft>{titleLeft}</MainSectionHeaderTitleLeft>
      <MainSectionHeaderSubtitleLeft>
        {subtitleLeft}
      </MainSectionHeaderSubtitleLeft>
    </MainSectionHeaderTitleLeftContainer>
    <MainSectionHeaderTitleRightContainer style={rightStyle}>
      <MainSectionHeaderTitleRight {...getUrlProps(rightUrl)}>
        {titleRight}
      </MainSectionHeaderTitleRight>
      <MainSectionHeaderSubtitleRight {...getUrlProps(rightUrl)}>
        {subtitleRight}
      </MainSectionHeaderSubtitleRight>
    </MainSectionHeaderTitleRightContainer>
  </MainSectionHeaderContainer>
);

MainSectionHeader.propTypes = {
  titleLeft: PropTypes.string.isRequired,
  subtitleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  subtitleRight: PropTypes.string,
  style: PropTypes.object,
  leftStyle: PropTypes.object,
  rightStyle: PropTypes.object,
  rightUrl: PropTypes.string,
  className: PropTypes.string,
  removeMarginBottom: PropTypes.bool,
};

export default MainSectionHeader;

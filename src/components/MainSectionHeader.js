import React from 'react';
import PropTypes from 'prop-types';
import { mdiOpenInNew } from '@mdi/js';

import {
  MainSectionHeaderContainer,
  MainSectionHeaderTitleLeftContainer,
  MainSectionHeaderTitleLeft,
  MainSectionHeaderSubtitleLeft,
  MainSectionHeaderTitleRightContainer,
  MainSectionHeaderTitleRight,
  MainSectionHeaderSubtitleRight,
  colors,
} from '../style';

const getUrlProps = url => {
  if (url != null) {
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
  className,
  removeMarginBottom,
}) => (
  <MainSectionHeaderContainer
    className={className}
    removeMarginBottom={removeMarginBottom}
  >
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
};

export default MainSectionHeader;

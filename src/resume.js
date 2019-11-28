import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { renderToString } from 'react-dom/server';

import { MainSectionTitle } from './components';
import * as sections from './sections';
import {
  MainContainer,
  MainSection,
  MainSectionContent,
  ProfileContainer,
  SectionsContainer,
} from './style';

class Resume extends PureComponent {
  renderSection(key, title, isLast) {
    const Component = sections[`${key[0].toUpperCase()}${key.slice(1)}`];

    if (Component) {
      return (
        <MainSection key={`section-${key}`} sectionKey={key} isLast={!!isLast}>
          <MainSectionTitle icon={key} title={title} />
          <MainSectionContent>
            <Component data={this.props.data[key]} />
          </MainSectionContent>
        </MainSection>
      );
    }

    return null;
  }

  renderProfile() {
    return (
      <ProfileContainer>
        <sections.Profile
          profile={this.props.data.basics}
          languages={this.props.data.languages}
        ></sections.Profile>
      </ProfileContainer>
    );
  }

  renderSections() {
    return (
      <SectionsContainer>
        {this.renderSection('basics', 'About')}
        {this.renderSection('work', 'Work')}
        {this.renderSection('skills', 'Skills')}
        {this.renderSection('education', 'Education')}
        {this.renderSection('awards', 'Awards')}
        {this.renderSection('references', 'References')}
        {this.renderSection('interests', 'Interests', true)}
      </SectionsContainer>
    );
  }

  render() {
    return (
      <MainContainer>
        {this.renderProfile()}
        {this.renderSections()}
      </MainContainer>
    );
  }
}

export default Resume;

Resume.propTypes = {
  data: PropTypes.object,
};

export const renderHtml = data => {
  const app = renderToString(<Resume data={data} />);

  return { app };
};

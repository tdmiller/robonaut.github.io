// React
import React from 'react';
import ReactDom from 'react-dom';

// Resume Component and Data
import resumeData from '../resume.json';
import Resume from './resume';

// Accept hot reload triggers on this non react component file
if (module.hot) {
  module.hot.accept();
}

// Render
const renderFn = process.env.NODE_ENV === 'production' ? 'hydrate' : 'render';
ReactDom[renderFn](
  <Resume data={resumeData} />,
  document.getElementById('app')
);

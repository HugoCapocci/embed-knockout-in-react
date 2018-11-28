import React from 'react';
import { render } from 'react-dom';
import ReactWrapper from './react-wrapper';

/* global document */
render(
  <div>
    <ReactWrapper todos={[
      { name: 'bug 1', userRating: null },
      { name: 'evol 1', userRating: 'like' },
      { name: 'timebox 1', userRating: 'dislike' },
    ]}
    />
  </div>,
  document.getElementById('content'),
);

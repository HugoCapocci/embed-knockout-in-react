import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactWrapper, Todo } from './react-wrapper-ts';

const todos: Todo[] = [
  { name: 'bug 1', userRating: null },
  { name: 'evol 1', userRating: 'like' },
  { name: 'timebox 1', userRating: 'dislike' },
]

ReactDOM.render(
  <ReactWrapper todos={todos}/>,
  document.getElementById('content'),
);

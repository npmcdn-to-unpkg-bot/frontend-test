import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentBox from './components/CommentBox'

render(
  <CommentBox url="http://localhost:3010/api/branches/" />,
  document.getElementById('container')
);

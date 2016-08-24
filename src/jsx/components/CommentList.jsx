import React, { Component } from 'react';
import Comment from './Comment'

export default class CommentList extends Component {
  render() {
    var commentNodes = this.props.data.map((comment) => {
      return (
        <Comment key={comment.key} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
}

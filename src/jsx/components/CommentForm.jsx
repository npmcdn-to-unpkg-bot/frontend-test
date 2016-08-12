import React from 'react';
import { findDOMNode } from 'react-dom';

export default class CommentForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = findDOMNode(this.refs.author).value.trim();
    var text = findDOMNode(this.refs.text).value.trim();
    if (!text || !author) return;
    this.props.onCommentSubmit({author: author, text: text});
    findDOMNode(this.refs.author).value = '';
    findDOMNode(this.refs.text).value = '';
  }
  render() {
    return(
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something..." ref="text" />
        <input type="submit" value="Post" />
      </form>
     );
  }
}

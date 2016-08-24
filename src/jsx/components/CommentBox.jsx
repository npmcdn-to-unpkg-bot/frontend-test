import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => { this.setState({ data: data }); },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => { this.setState({ data: data }); },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
  }

  render() {
    return (
      <div className='commentBox'>
        <h2>コメントボックス</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

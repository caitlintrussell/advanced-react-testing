import React, {Component} from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  }
  handleChange = (event) => {
    this.setState({comment: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({comment: ''});
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Comment</h4>
        <textArea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;

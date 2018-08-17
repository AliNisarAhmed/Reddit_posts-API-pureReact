import React from 'react';

class Score extends React.Component {
  state = {
    isUpvoted: false,
    isDownvoted: false
  }

  handleUpvote = () => {
    this.setState((prevState) => {
      this.props.onUpvote(this.props.id, prevState);
      if(prevState.isDownvoted) {
        return {
          isUpvoted: !prevState.isUpvoted,
          isDownvoted: !prevState.isDownvoted
        };
      } else {
        return {
          isUpvoted: !prevState.isUpvoted
        };
      }
    });
  }

  handleDownvote = () => {
    this.setState((prevState) => {
      this.props.onDownvote(this.props.id, prevState);
      if (prevState.isUpvoted) {
        return {
          isUpvoted: !prevState.isUpvoted,
          isDownvoted: !prevState.isDownvoted
        };
      } else {
        return {
          isDownvoted: !prevState.isDownvoted
        };
      }
    });
  }

  render() {

    const { onUpvote, id, score } = this.props;
    const { isUpvoted, isDownvoted } = this.state;

    return (
      <div className="score">
        <div className="score__icon--upvote">
          <i 
            className={`fa fa-arrow-up ${isUpvoted ? `upvote`: ''}`} 
            onClick={this.handleUpvote}>
          </i>
        </div>
        <span className={`${isUpvoted ? 'upvote': ''} ${isDownvoted? 'downvote': ''}`}>{score}</span>
        <span className="score__icon--downvote">
          <i 
            className={`fa fa-arrow-down ${isDownvoted ? 'downvote' : ''}`} 
            onClick={this.handleDownvote}>
          </i>
        </span>
      </div>
    )
  };
}
export default Score;
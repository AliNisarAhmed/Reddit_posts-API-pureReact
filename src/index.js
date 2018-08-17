import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import "./styles.css";

import PostList from './components/PostList';


/*
• Display the number of votes
• Functioning Upvote and Downvote controls
• Display the number of comments
• Sort the stories by number of upvotes
• The title should be a real link
• Other links do not need to be functional(share, save, hide, etc.)

*/

// - App
  // - Post-list
    // - Post
      // - Score
      // - Thumbnail
      // - Post
        // - Heading and website
        // - Stats
        // - links


// let data;
// data = axios.get('https://www.reddit.com/r/reactjs.json').then((res) => {
//   return res.data.data.children;
//  })

//  console.log(data);

class App extends React.Component {

  state = {
    postData: []
  };

  handleUpvote = (id, { isUpvoted, isDownvoted }) => {
    const temp = { ...this.state };
    const index = this.state.postData.findIndex(post => post.data.id === id);
    if(!isUpvoted) {
      if(isDownvoted) {
        temp.postData[index].data.score += 2;  
      } else {
        temp.postData[index].data.score += 1;
      }  
    } else {
      temp.postData[index].data.score -= 1;  
    }
    this.setState(() => ({ ...temp })); 
  }

  handleDownvote = (id, { isUpvoted, isDownvoted }) => {
    const temp = { ...this.state };
    const index = this.state.postData.findIndex(post => post.data.id === id);
    if (!isDownvoted) {
      if (isUpvoted) {
        temp.postData[index].data.score -= 2;
      } else {
        temp.postData[index].data.score -= 1;
      }
    } else {
      temp.postData[index].data.score += 1;
    }
    this.setState(() => ({ ...temp }));
  }
  

  componentDidMount() {
    
    axios.get('https://www.reddit.com/r/reactjs.json').then(res => {
      let postData = res.data.data.children.sort((a, b) => a.data.score > b.data.score?  -1: 1);
      console.log(postData);
      this.setState(() => ({ postData }));
    });    

  }

  render() {
    return (
      <PostList 
        onUpvote={this.handleUpvote} 
        onDownvote={this.handleDownvote}
        postData={this.state.postData}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

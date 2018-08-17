import React from 'react';
import Score from './Score.js';
import Thumbnail from './Thumbnail';
import Post from './Post';

const PostList = ({ postData, onUpvote, onDownvote }) => {
  console.log(postData);
  return (
    <div className="postList">
      {postData.map(post => {
        return (
          <div key={post.data.id} className="post">
            <Score 
              id={post.data.id} 
              score={post.data.score}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
            />
            <Thumbnail thumbnail={post.data.thumbnail}/>
            <Post 
              title={post.data.title}
              domain={post.data.domain} 
              url={post.data.url}
              author={post.data.author}
              createdAt={post.data.created}
              comments={post.data.num_comments}
              permalink={post.data.permalink}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

// postData => post => 
                // post.data.title
                // post.data.author
                // post.data.score
                // post.data.num_comments
                // post.data.url
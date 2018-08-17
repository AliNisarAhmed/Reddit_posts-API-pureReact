import React from 'react';
import Heading from './Heading';
import Stats from './Stats';
import ActionLinks from './ActionLinks';

// - Post
        // - Heading and website
        // - Stats
        // - links

const Post = ({ title, domain, url, author, createdAt, comments, permalink }) => {
  return (
    <div className="post__content">
      <Heading title={title} domain={domain} url={url}/>
      <Stats author={author} createdAt={createdAt}/>
      <ActionLinks comments={comments} permalink={permalink}/>
    </div>
  );
};

export default Post;
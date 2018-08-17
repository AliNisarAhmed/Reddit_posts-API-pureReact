import React from 'react';

const ActionLinks = ({ comments, permalink }) => {
  const num_comments = comments === 0 ? 'Comment': `${comments} Comment${comments === 1? '': 's'}`; 
  return (
    <div className="action">
      <span className="action__links action__comments"><a href="#">{num_comments}</a></span>
      <span className="action__links"><a href="#">share</a></span>
      <span className="action__links"><a href="#">save</a></span>
      <span className="action__links"><a href="#">hide</a></span>
      <span className="action__links"><a href="#">report</a></span>
      <span className="action__links"><a href="#">pocket</a></span>
    </div>
  );
};

export default ActionLinks;
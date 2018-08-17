import React from 'react';
import moment from 'moment';

const Stats = ({ author, createdAt }) => {
  // Reddit API gives created at in Unix seconds rather than milliseconds
  const time = moment.unix(createdAt).fromNow();
  return (
    <div className="stats">
      <span>Submitted {time} by <a href="#" className="stats__author">{author}</a></span>
    </div>
  );
};

export default Stats;
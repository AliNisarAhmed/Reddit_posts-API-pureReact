import React from 'react';

const Heading = ({ title, url, domain }) => {

  return (
    <div className="heading">
      <a className="heading__link" href={url}>{title}</a>
      <span className="heading__domain">{domain}</span>
    </div>
  );
};

export default Heading;
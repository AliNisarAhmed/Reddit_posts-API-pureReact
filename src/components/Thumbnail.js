import React from 'react';

const Thumbnail = (props) => {
  
  if(props.thumbnail === 'self') {
    return (
      <div className="thumbnail">
        <img src="https://uploads.codesandbox.io/uploads/user/641e4d73-6370-4576-aaed-734dd3ade4d7/9vva-Reddit.png" alt="Reddit Thumbnail" />
      </div>
    );
  } else {
    return (
      <div className="thumbnail">
        <img src={props.thumbnail} />
      </div>
    );
  }
};

export default Thumbnail;
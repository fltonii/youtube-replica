import React from 'react';

const VideoListItem = ({ item, onVideoSelect }) => {
  const imageUrl = item.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(item)}>
      <div className="media-left">
        <img className="media-object" src={imageUrl} />
      </div>

      <div className="media-body">
        <div className="media-heading">{item.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;

import React from 'react';
import './VideoCard.css';

export default function VideoCard({
    thumbnail, 
    title, 
    views, 
    channel_image, 
    channel_name, 
    timestamp,}) {
  return (
    <div className='videoCard'>
      <img src={thumbnail} alt='thumbnail' className='videoCard__thumbnail'/>
      <div className='videoCard__info'>
        <img src={channel_image} alt='channel_image'/>
        <div className='videoCard__text'>
            <h4>{title}</h4>
            <p>{channel_name}</p>
            <p>
                {views} views - {timestamp}
            </p>
        </div>
      </div>
    </div>
  )
}
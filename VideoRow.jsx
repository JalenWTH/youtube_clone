import React from 'react';
import './VideoRow.css';

function VideoRow({
  imageSource,
  channel,
  subscribers,
  description,
  timeStamp,
  views,
  title
}) {
  return (
    <div className='videoRow'>
        <img src={imageSource} alt='videoRow__image'/>
        <div className='videoRow__text'>
            <h4>{title}</h4>
        </div>
            <p>{views} · {timeStamp} </p>

            <p>{description}</p>
    </div>
  )
}

export default VideoRow

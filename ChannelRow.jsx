import React from 'react';
import './ChannelRow.css';

function ChannelRow({
    image,
    channel,
    subscribers,
    videoCount,
    description,
    verified
  }) {
  return (
    <div className='channelRow'>
      <img
        className='channelRow__image'
        alt='channel image'
        src={image}
      />

      <div className='channelRow__text'>
        <h4>{channel}</h4>
      </div>
    </div>
  )
}

export default ChannelRow

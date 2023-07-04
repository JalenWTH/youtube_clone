import React from 'react';
import './ChannelRow.css';
import VerifiedIcon from '../../assets/Icons/VerifiedIcon.jsx';


function ChannelRow({
    imageSource,
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
        src={imageSource}
      />

      <div className='channelRow__text'>
        <h4>{channel} {verified && <VerifiedIcon/>} </h4>
        <p>{subscribers} Subscribers</p>
        <p>{videoCount} Videos</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ChannelRow

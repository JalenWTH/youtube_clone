import React from 'react';
import './SearchPage.css';
import VideoRow from './VideoRow/VideoRow';
import ChannelRow from './ChannelRow/ChannelRow';
import Filter from '../assets/Icons/Filter';

export default function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
          <Filter/>
          <h3>Filter</h3>
        </div>
        <hr/>
        <ChannelRow/>
        <VideoRow/>
    </div>
  )
}

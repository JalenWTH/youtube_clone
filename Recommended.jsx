import React from 'react';
import VideoCard from './VideoCard/VideoCard.jsx';
import './Recommended.css';

export default function Recommended() {
  return (
    <div className='recommended'>
        <VideoCard 
          thumbnail='https://source.unsplash.com/random/flower' 
          title='This is a Youtube Video' 
          views='1m'
          channelName='JalenWithTheHead' 
          timestamp='6/27/2023'
          channelImage='https://iili.io/HiULotj.png'
        />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/r' 
          title='This is a Youtube Video' 
          views='1m' 
          channelName='JalenWithTheHead'
          timestamp='6/27/2023'
         />
       
         <VideoCard 
          thumbnail='https://source.unsplash.com/featured/a' 
          title='This is a Youtube Video' 
          views='1m' 
          channelName='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/b' 
          title='This is a Youtube Video' 
          views='1m' 
          channelName='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/c' 
          title='This is a Youtube Video' 
          views='1m' 
          channel_name='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/d' 
          title='This is a Youtube Video' 
          views='1m' 
          channel_name='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/g' 
          title='This is a Youtube Video' 
          views='1m' 
          channel_name='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random/f' 
          title='This is a Youtube Video' 
          views='1m' 
          channel_name='JalenWithTheHead'
          timestamp='6/27/2023'
         />

        <VideoCard 
          thumbnail='https://source.unsplash.com/random' 
          title='This is a Youtube Video' 
          views='1m' 
          channel_name='JalenWithTheHead'
          timestamp='6/27/2023'
         />
    </div>
  )
}

import React from 'react';
import SidebarRow from './SidebarRow/SidebarRow.jsx';
import {
  HomeIcon,
  TrendingIcon,
  SubscriptionsIcon,
  LibraryIcon,
  HistoryIcon,
  YourVideosIcon,
  WatchLaterIcon,
  LikedVideosIcon,
  CaretIcon,
} from '../assets/Icons';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow title='Home' icon={<HomeIcon/>}/>
      <SidebarRow title='Trending' icon={<TrendingIcon/>}/>
      <SidebarRow title='Subscriptions' icon={<SubscriptionsIcon/>}/>
      <hr/>
      <SidebarRow title='Library' icon={<LibraryIcon/>}/>
      <SidebarRow title='History' icon={<HistoryIcon/>}/>
      <SidebarRow title='Your Videos' icon={<YourVideosIcon/>}/>
      <SidebarRow title='Watch Later' icon={<WatchLaterIcon/>}/>
      <SidebarRow title='Liked Videos' icon={<LikedVideosIcon/>}/>
      <SidebarRow title='Show More' icon={<CaretIcon/>}/>
    </div>
  )
}


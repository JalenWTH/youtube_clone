import React from 'react';
import './SidebarRow.css';

export default function SidebarRow({icon, title}) {
  return (
    <div className='sidebarRow'>
        <span className={'sidebarRow__icon'}>{icon}</span>
        <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  )
}



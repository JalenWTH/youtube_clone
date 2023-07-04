import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import Recommended from './Recommended/Recommended.jsx';
import SearchPage from './SearchPage/SearchPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:(
      <>
          <Header/>
          <div style={{display:'flex'}}>
            <Sidebar/>
            <Recommended/>
          </div>
      </>
    )
  },

  {
    path:'/search/:searchTerm',
    element:(
      <>
        <Header/>
        <div style={{display:'flex'}}>
          <Sidebar/>
          <SearchPage/>
        </div>
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

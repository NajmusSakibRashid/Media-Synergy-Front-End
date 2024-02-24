import React from 'react'
import Navbar from './navbar'
import DrawerSide from './drawer-side'

export default function drawer({ children }) {
  return (
    <div className="drawer">
      <input type="checkbox" id="my-drawer" className='drawer-toggle' />
      <div className="drawer-content">
        <img src="https://w7.pngwing.com/pngs/141/637/png-transparent-computer-icons-notifications-cdr-area-sound-icon-thumbnail.png" alt="" />
        <Navbar dropdownContent={
          [
            {title:'Settings',link:'/user'},
            {title:'Logout',link:'/user'}
          ]
        } />
        <div className="mt-16 p-4">
          {children}
        </div>
      </div>
      <DrawerSide>
        {
          [
            { title: 'Dashboard', link: '/user' },
            { title: 'Content', link: '/user' },
            { title: 'Scheduling', link: '/user' },
            { title: 'Analytics', link: '/user' },
            { title: 'Community', link: '/user' }
          ]
        }
      </DrawerSide>
    </div>
  )
}

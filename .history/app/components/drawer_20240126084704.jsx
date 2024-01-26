import React from 'react'
import Navbar from './navbar'
import DrawerSide from './drawer-side'

export default function drawer({children}) {
  return (
    <div className="drawer">
      <input type="checkbox" id="my-drawer" className='drawer-toggle'/>
      <div className="drawer-content">
        <Navbar dropdownContent={['Settings', 'Logout']} />
        {children}
      </div>
      <DrawerSide>
        {
          [
            {title:'Dashboard',link:'/user'},
            {title:'Content',link:'/user'},
            {title:'Scheduling',link:'/user'},
            {title:'Analytics',link:'/user'},
            {title:'Community',link:'/user'}
          ]
        }
      </DrawerSide>
    </div>
  )
}

import React from 'react'
import Navbar from './navbar'

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
            {title:'Dashboard',link:'/'},
            {title:'Content',link:'/'},
            {title:'Scheduling',link:'/'},
            {title:'Analytics',link:'/'},
            {title:'Community',link:'/'}
          ]
        }
      </DrawerSide>
    </div>
  )
}

import React from 'react'
import Drawer from '@/app/components/drawer'

export default function userLayout({ children }) {
  return (
    <>
      <Navbar dropdownContent={['Settings', 'Logout']} />
      {children}
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
    </>
  )
}

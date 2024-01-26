import React from 'react'
import Navbar from '@/app/components/navbar'
import DrawerSide from '@/app/components/drawer-side'

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

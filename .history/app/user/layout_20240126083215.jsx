import React from 'react'
import Navbar from '@/app/components/navbar'
import drawerSide from '@/app/components/drawer-side'

export default function userLayout({children}) {
  return (
    <>
      <Navbar dropdownContent={['Settings','Logout']} />
      {children}

    </>
  )
}

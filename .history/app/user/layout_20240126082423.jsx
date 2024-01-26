import React from 'react'
import Navbar from '@/app/components/navbar'

export default function userLayout({children}) {
  return (
    <>
      <Navbar dropdownContent={['Settings','Logout']} />
      {children}
    </>
  )
}

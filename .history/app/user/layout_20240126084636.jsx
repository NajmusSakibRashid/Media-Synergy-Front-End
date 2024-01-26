import React from 'react'
import Drawer from '@/app/components/drawer'

export default function userLayout({ children }) {
  return (
    <>
      <Drawer>{children}</Drawer>
    </>
  )
}

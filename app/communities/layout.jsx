import React from 'react'
import Drawer from '@/app/components/drawer'
import Footer from '@/app/components/footer'

export default function userLayout({ children }) {
  return (
    <>
      <Drawer>{children}</Drawer>
      <Footer />
    </>
  )
}

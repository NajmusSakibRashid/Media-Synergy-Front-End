import React from 'react'
import User from '@/app/components/user'

export default function userPage() {
  return (
    <div className="flex flex-row">
      <div className='basis-2/12 p-4 flex-grow-0'>
        <User/>
      </div>
      <div className='basis-8/12 p=4'>
        Hello World
      </div>
      <div className='basis-2/12 p-4'>
        Hello World
      </div>
    </div>
  )
}

import React from 'react'
import User from '@/app/components/user'
import LeftInfo from '@/app/components/left-info'
import UpComingContents from '@/app/components/upcoming-contents'
import DashBoardStats from '@/app/components/dashboard-stats'

export default function userPage() {
  return (
    <div className="flex flex-row">
      <div className='basis-2/12 p-4 flex-grow-0 flex-shrink-0 flex flex-col gap-4'>
        <User/>
        <LeftInfo/>
      </div>
      <div className='basis-8/12 p-4 flex-grow-0 flex-shrink-0'>
        Hello World
      </div>
      <div className='basis-2/12 p-4 flex-grow-0 flex-shrink-0'>
        <UpComingContents/>
      </div>
    </div>
  )
}

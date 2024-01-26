import React from 'react'
import User from '@/app/components/user'

export default function userPage() {
  return (
    <div className="flex">
      <div className="basis-2/12">
        <User/>
      </div>
      <div className="basis-8/12">
        Hello World
      </div>
      <div className="basis-2/12">
        Hello World
      </div>
    </div>
  )
}

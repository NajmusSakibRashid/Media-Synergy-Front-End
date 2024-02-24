import React from 'react'

export default function publishContent() {
  return (
    <div className={`z-40 fixed top-0 left-0 h-screen w-screen`} style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
      <div className="bg-base-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl p-4 max-h-screen overflow-y-scroll opacity-100">
        <div className="grid grid-col-3"></div>
      </div>
    </div>
  )
}

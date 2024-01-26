import React from 'react'

import userImage from 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'

export default function user() {
  return (
    <div className="card w-full bg-base-200">
      <Image src={userImage} className="card-img" />
    </div>
  )
}

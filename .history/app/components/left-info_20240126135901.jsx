import React from 'react'

export default function leftInfo() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-title p-4 pb-0">Recent</div>
      <ul style="list-style-image:url('./img/checkmark.png')" className="list-inside p-4">
        <li>Lorem Ipsum</li>
        <li>dolor sit amet,</li>
        <li>Consectetur adipiscing</li>
      </ul>
      <div className="border-solid border-b-2"></div>
      <div className="card-title p-4 pb-0">Group Activities</div>
      <ul style="list-style-image:url('./img/checkmark.png')" className="list-inside p-4">
        <li>Lorem Ipsum</li>
        <li>dolor sit amet,</li>
        <li>Consectetur adipiscing</li>
      </ul>
    </div>
  )
}

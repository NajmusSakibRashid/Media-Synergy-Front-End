import React from 'react'
import Link from 'next/link'

export default function drawerSide({ children }) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-16 fixed">
        {/* <!-- Sidebar content here --> */}
        {/* <li><a href="/src/index.html">Dashboard</a></li> */}
        {
          children?.map(item => {
            return <li><Link href={item.link}>{item.title}</Link></li>
          })
        }
      </ul>
    </div>
  )
}

import React from 'react'
import Link from 'next/link'

export default function drawerSide({ drawerContent }) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" ariaLabel="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-16 fixed">
        {/* <!-- Sidebar content here --> */}
        {/* <li><a href="/src/index.html">Dashboard</a></li> */}
        {
          drawerContent?.map(item => {
            return <li><Link>item.title</Link></li>
          })
        }
      </ul>
    </div>
  )
}

import React from 'react'

export default function drawerSide() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" ariaLabel="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-16 fixed">
        {/* <!-- Sidebar content here --> */}
        <li><a href="/src/index.html">Dashboard</a></li>
        <li><a>Content</a></li>
        <li><a href="/src/pages/scheduling-dashboard.html">Scheduling</a></li>
        <li><a>Analytics</a></li>
        <li><a>Community</a></li>
      </ul>
    </div>
  )
}

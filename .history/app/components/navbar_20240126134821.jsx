'use client'

import { useEffect,useState } from 'react'
import fs from 'fs'

export default function navbar() {
  const [dropdownContent, setDropdownContent] = useState(null);

  useEffect(() => {
    fetch('@/app/files/dropdown-content.json')
      .then(response => response.json())
      .then(data => setDropdownContent(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="navbar bg-base-300 fixed z-10">
      <div className="flex-none">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
      <div className="flex-1">
        <a className="mx-10 btn btn-ghost text-xl" href="/src/index.html">MediaSynergy</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
          {/* <!-- <div tabindex="0" role="button" className="btn m-1">Click</div> --> */}
          <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {
              dropdownContent?.map(item=>{
                return <li><a>{item}</a></li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

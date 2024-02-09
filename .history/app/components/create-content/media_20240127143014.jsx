'use client'

import React from 'react'

export default function media() {
  const [file, setFile] = React.useState(null)
  return (
    <>
      <img src="https://static-00.iconduck.com/assets.00/fast-food-illustration-2048x1469-7bth2szr.png" alt="" />
      <input onChange={(e)=>{setFile(e.target.value)}} type="file" class="file-input file-input-bordered w-full " />
    </>
  )
}

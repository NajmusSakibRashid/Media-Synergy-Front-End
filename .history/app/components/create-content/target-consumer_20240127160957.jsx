import React from 'react'

export default function targetConsumer() {
  return (
    <div className="grid gird-cols-3 gap-4">
      <div>
        <label htmlFor='ageFrom' className="label">Age From:</label>
        <input name='ageFrom' type="number" className="input input-bordered w-full" placeholder="Enter age from" />
      </div>
      <div>
        <label htmlFor='ageTo' className="label">Age To:</label>
        <input name='ageTo' type="number" className="input input-bordered w-full" placeholder="Enter age to" />
      </div>
      <div></div>
    </div>
  )
}

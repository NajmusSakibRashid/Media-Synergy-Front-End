import React from 'react'

export default function targetConsumer() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor='ageFrom' className="label">Age From:</label>
        <input name='ageFrom' type="number" className="input input-bordered w-full" placeholder="Enter age from" />
      </div>
      <div>
        <label htmlFor='ageTo' className="label">Age To:</label>
        <input name='ageTo' type="number" className="input input-bordered w-full" placeholder="Enter age to" />
      </div>
      <div className='col-span-2'>
        <label htmlFor="gender" className='label'>Gender:</label>
        <div className='flex gap-16 w-full'>
          <input className='radio radio-primary' type="radio" name="gender" value='male' />
          <label htmlFor="male">Male</label>
          <input className='radio radio-primary' type="radio" name="gender" value='female' />
          <label htmlFor="male">Female</label>
          <input className='radio radio-primary' type="radio" name="gender" value='both' />
          <label htmlFor="male">Both</label>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

export default function targetConsumer({ onChange }) {
  const [consumer, setConsumer] = useState({})
  const changeHandler = (e, preProcess) => {
    setConsumer({ ...consumer, [e.target.name]: preProcess(e.target.value) })
  }
  return (
    <>
      <label htmlFor="consumers" className='label'>Consumers:</label>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {required[0] && <span className='text-error'>*This field is required </span>}
          <label htmlFor='ageFrom' className="label">Age From:</label>
          <input onChange={(e) => changeHandler(e, parseInt)} name='ageFrom' type="number" className="input input-bordered w-full" placeholder="Enter age from" />
        </div>
        <div>
          {required[1] && <span className='text-error'>*This field is required </span>}
          <label htmlFor='ageTo' className="label">Age To:</label>
          <input onChange={(e) => changeHandler(e, parseInt)} name='ageTo' type="number" className="input input-bordered w-full" placeholder="Enter age to" />
        </div>
        <div className='col-span-2'>
          {required[2] && <span className='text-error'>*This field is required </span>}
          <label htmlFor="gender" className='label'>Gender:</label>
          <div className='flex justify-between w-full'>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='male' />
            <label htmlFor="male">Male</label>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='female' />
            <label htmlFor="male">Female</label>
            <input onChange={(e) => changeHandler(e, (data => data))} className='radio radio-primary' type="radio" name="gender" value='both' />
            <label htmlFor="male">Both</label>
          </div>
        </div>
        <div className='col-span-2 flex justify-center'>
          <input onClick={() => {
            if(!requiredCheck()){
              return;
            }
            console.log('we are here')
            onChange({
              target: {
                name: 'consumer',
                value: consumer
              }
            });
            const inputs = document.querySelectorAll('.input');
            inputs.forEach(input => {
              input.value = '';
            })
            const radios = document.querySelectorAll('.radio');
            radios.forEach(radio => {
              radio.checked = false;
            })
            setRequired([false,false,false]);
            setConsumer({});
          }} type="button" className="btn btn-primary" value='Add consumer' />
        </div>
      </div>
    </>
  )
}

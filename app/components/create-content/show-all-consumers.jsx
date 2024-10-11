import React from 'react'

export default function ShowAllConsumers({ consumers, setContent}) {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {consumers?.map((consumer,index) =>
        <div key={index} className='card bg-base-300 p-4 max-h-40'>
          Age From: {consumer.ageFrom} <br />
          Age To: {consumer.ageTo} <br />
          Gender : {consumer.gender} <br />
          <button class='btn btn-primary min-h-0 h-6' onClick={()=>{
            setContent(content=>{
              return {...content,consumer:content.consumer.filter(_consumer=>_consumer.id!=consumer.id)}
            })
          }}>Remove</button>
        </div>
      )}
    </div>
  )
}

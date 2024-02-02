import React from 'react'

export default function showAllConsumers({ consumers }) {
  return (
    consumers?.map(consumer => 
      <>
        Age From: {consumer.ageFrom}
        Age To: {consumer.ageTo}
        Gender : {consumer.gender}
      </>  
    )
  )
}

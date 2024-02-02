import React from 'react'

export default function showAllConsumers({ consumers }) {
  return (
    <div>
      {consumers?.map(consumer =>
        <>
          Age From: {consumer.ageFrom} <br />
          Age To: {consumer.ageTo} <br />
          Gender : {consumer.gender} <br />
        </>
      )}
    </div>
  )
}

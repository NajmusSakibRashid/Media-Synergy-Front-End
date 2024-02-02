'use client'

import React from 'react'
import ProfileCard from '@/app/components/create-content/profile-card'

export default function profileCardContainer() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  )
}

import React from 'react'
import facebook from '@/app/components/contents/facebook'

export default function page(params) {
  const renderItem={
    facebook:<facebook>{params.postId}</facebook>
  }
  return renderItem[params.platform]
}

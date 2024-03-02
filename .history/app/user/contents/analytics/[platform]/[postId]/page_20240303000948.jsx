import React from 'react'
import facebook from '@/app/components/contents/facebook'

export default function page({params}) {
  const renderItem={
    facebook:<facebook>{params.postId}</facebook>
  }
  console.log(params.platform)
  console.log('we are here');
  return renderItem[params.platform]
}

import React from 'react'
import Facebook from '@/app/components/contents/facebook'

export default function page({params}) {
  if(params.platform==='facebook'){
    return <Facebook>{params.postId}</Facebook>
  }
  else if(params.platform==='twitter'){
    return <twitter>{params.postId}</twitter>
  }
  else if(params.platform==='linkedin'){
    return <linkedin>{params.postId}</linkedin>
  }
  else if(params.platform==='instagram'){
    return <instagram>{params.postId}</instagram>
  }
  else{
    return <div>Invalid Platform</div>
  }
}

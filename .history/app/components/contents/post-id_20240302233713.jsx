import { useState, useEffect } from 'react'

export default function postId({ children }) {
  const imageSrc = {
    facebook: 'https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png',
    twitter: 'https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png',
    linkedin: 'https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png',
    instagram: 'https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png',
  }
  return (
    <div className="card card-body p-4 flex flex-col items-center gap-4">
      <img src={imageSrc[children.platform]} alt="" className="h-24 object-cover" />
      <button className="btn btn-primary w-full">View Analytics</button>
      <button className="btn btn-secondary w-full" onClick={()=>window.location.href=children.postUrl}>View Post</button>
    </div>
  )
}

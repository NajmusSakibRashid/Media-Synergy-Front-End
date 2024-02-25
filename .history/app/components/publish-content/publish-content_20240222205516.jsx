import React from 'react'

export default function publishContent() {
  const options=[
    {
      name:'Facebook',
      value:'facebook',
      image:'https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338509_1280.png'
    },
    {
      name:'Twitter',
      value:'twitter',
      image:'https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png'
    },
    {
      name:'Instagram',
      value:'instagram',
      image:'https://www.unipile.com/wp-content/uploads/2022/09/logo_instagram.png',
    },
    {
      name:'LinkedIn',
      value:'linkedin',
      image:'https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png'
    }
  ]
  return (
    <div className={`z-40 fixed top-0 left-0 h-screen w-screen`} style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
      <div className="bg-base-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-xl p-4 max-h-screen overflow-y-scroll opacity-100">
        <div className="grid grid-cols-3 gap-4 p-8">
          {
            options.map((option)=>{
              return (
                <div className="card card-body p-4 flex flex-col items-center gap-4">
                  <img src={option.image} alt="" className="w-16" />
                  <div>{option.name}</div>
                  <input type="checkbox" value={option.value} className="form-checkbox checkbox checkbox-xl checkbox-primary" />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

"use client"
import React from 'react'

export default function CardButtonCommunity({title, img, link, avatar_img, description, btn_name}) {
    return (
        
        <div className="card w-full bg-base-100 shadow-xl h-full btn-ghost">
            <div className="body">
            <figure class="px-10 pt-10 relative overflow-visible">
            <img src={img} alt="Shoes" class="rounded-xl h-20"/> 
            <div class="avatar-group -space-x-3 rtl:space-x-reverse absolute top-24">
                <div class="avatar">
                    <div class="w-6">
                        <img src={avatar_img} alt="Avatar Tailwind CSS Component" class="rounded-full w-full h-full"/>
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-6">
                        <img src={avatar_img} alt="Avatar Tailwind CSS Component" class="rounded-full w-full h-full"/>
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-6">
                        <img src={avatar_img} alt="Avatar Tailwind CSS Component" class="rounded-full w-full h-full"/>
                    </div>
                </div>
                <div class="avatar placeholder">
                    <div class="w-6 bg-neutral text-neutral-content">
                        <span>+99</span>
                    </div>
                </div>
            </div>
            </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button 
                        className="btn btn-primary"
                        onClick={() => {
                            window.location.href = link
                        }} 
                        
                        >{btn_name}
                    </button>
                </div>
            </div>
        </div>
    );
}
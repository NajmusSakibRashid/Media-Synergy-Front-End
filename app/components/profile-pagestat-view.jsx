"use Client";
import React from "react";
import ProfileAnalytics from "./profile-analytics";

export default function ProfilePageStatView({title}) {
    return (
        <div className="card p-2 shadow-xl hover:bg-gray-200">
            <div className="card card-title self-start">{title}</div>
            
            <canvas id="barChart" style={{display: 'block', boxSizing: 'border-box', height: '217px', width: '434px'}} width="434" height="217"></canvas>
        </div>
        
    );
}
